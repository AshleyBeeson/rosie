package AssessmentTesting;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BugTest {
	
	WebDriver driver;
	Main main;


	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver","..\\..\\..\\..\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http:localhost:8080");
	}
	@Test
	public void CheckHeadingsTest(){
		main= new Main(driver);

		String	mainTitle = main.getTitle();

		assertEquals(mainTitle,"Assessment");
		
		String bugSubTitle = main.getSubtitle();
		
		assertEquals(bugSubTitle,"Bug Table");
		
		String idCollumn = main.getIdCollumn();
		
		assertEquals(idCollumn,"ID");
		
		String filterButton = main.getFilterButton();
		
		assertEquals(filterButton,"MEDIUM SEVERITY");
		try {
			Thread.sleep(1500);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		String firstidelement= main.getfirstIDelement();
		
		assertEquals(firstidelement,"4");
		
		main.clickToOrder();
		
		String firstidelement1= main.getfirstIDelement1();
		
		assertEquals(firstidelement1,"1");
		
		String fourthidelement1= main.getfourthIDelement();
		
		assertEquals(fourthidelement1,"4");
		
		main.clickToFilter();
		main.clickToFilter();
		
		String fourthidelement2= main.getfourthIDelement1();
		
		assertEquals(fourthidelement2,"6");
		
		
		
	}
}
