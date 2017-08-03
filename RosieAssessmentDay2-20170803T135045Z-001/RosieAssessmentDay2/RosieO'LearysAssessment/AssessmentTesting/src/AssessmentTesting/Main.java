package AssessmentTesting;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Main {
	
	WebDriver driver;
	
	public Main (WebDriver driver){
		this.driver = driver;
	}
	
	By title= By.xpath("/html/head/title");
	By bugSubtitle = By.xpath("//*[@id=\"app\"]/div/h2[3]");
	By idCollumn = By.xpath("//*[@id=\"app\"]/div/div[3]/table/thead/tr/th[1]/button");
	By filterButton1 = By.xpath("//*[@id=\"app\"]/div/div[2]/button[1]");
	By firstIDelement= By.xpath("//*[@id=\"4\"]");
	By firstIDelement2=By.xpath("//*[@id=\"1\"]");
	By fourthIDelement= By.xpath("//*[@id=\"4\"]");
	By fourthIDelement1= By.xpath("//*[@id=\"6\"]");

	
	public String getTitle(){
		return driver.getTitle();
	}
	
	public String getSubtitle(){
		return driver.findElement(bugSubtitle).getText();
	}
	
	public String getIdCollumn(){
		return driver.findElement(idCollumn).getText();
	}
	public void clickToOrder(){
		driver.findElement(idCollumn).click();
	}
	
	public String getFilterButton(){
		return driver.findElement(filterButton1).getText();
	}
	public String getfirstIDelement(){
		return driver.findElement(firstIDelement).getText();
	}
	public String getfirstIDelement1(){
		return driver.findElement(firstIDelement2).getText();
	}
	public void clickToFilter(){
		driver.findElement(filterButton1).click();
	}
	public String getfourthIDelement(){
		return driver.findElement(fourthIDelement).getText();
	}
	public String getfourthIDelement1(){
		return driver.findElement(fourthIDelement1).getText();
	}

}
