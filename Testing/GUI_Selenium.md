
## GUI_Testing

#### Java Junit using Selenium

Below are the libraries/header files used:
```
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;

```
Sign_In Page:

```
public class SignINTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void signIN() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.findElement(By.id("Email")).click();
    driver.findElement(By.id("Password")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".PrivateSwitchBase-input"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("Password")).sendKeys("aasfdcdssa");
    driver.findElement(By.cssSelector(".PrivateSwitchBase-input")).click();
    driver.findElement(By.cssSelector(".PrivateSwitchBase-input")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.id("Email")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("Email")).sendKeys("sdsfdsa@gmail.com");
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Password must be between 8 and 20 characters and contain only alphanumeric characters and one special character."));
    driver.findElement(By.id("Email")).click();
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".PrivateSwitchBase-input"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.cssSelector(".PrivateSwitchBase-input")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
  }
}
```
