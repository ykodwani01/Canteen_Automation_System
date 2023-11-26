
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
Sign_Up Page:
```
public class SignUpTest {
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
  public void signUp() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(691, 372));
    driver.findElement(By.cssSelector(".MuiContainer-maxWidthXl")).click();
    driver.findElement(By.cssSelector(".css-1padm8r")).click();
    driver.findElement(By.id("Email")).click();
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Name")).click();
    driver.findElement(By.id("Name")).sendKeys("shrey");
    driver.findElement(By.id("Password")).click();
    driver.findElement(By.id("Email")).click();
    driver.findElement(By.id("Email")).sendKeys("202101493@daiict.ac.in");
    driver.findElement(By.id("ContactNo")).click();
    driver.findElement(By.cssSelector(".MuiContainer-maxWidthXl")).click();
    driver.findElement(By.id("ContactNo")).click();
    driver.findElement(By.id("ContactNo")).sendKeys("1234567890");
    driver.findElement(By.id("Password")).click();
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(5) .PrivateSwitchBase-input"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("Password")).sendKeys("abcdfg@123");
    driver.findElement(By.cssSelector("div:nth-child(5) .PrivateSwitchBase-input")).click();
    driver.findElement(By.cssSelector(".Mui-checked > .PrivateSwitchBase-input")).click();
    driver.findElement(By.cssSelector("div:nth-child(5) .PrivateSwitchBase-input")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.id("Confirm Password")).click();
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(6) .PrivateSwitchBase-input"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("Confirm Password")).sendKeys("abcdfg@123");
    driver.findElement(By.cssSelector("div:nth-child(6) .PrivateSwitchBase-input")).click();
    driver.findElement(By.cssSelector("div:nth-child(6) .PrivateSwitchBase-input")).click();
    driver.findElement(By.cssSelector("div:nth-child(6) .PrivateSwitchBase-input")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    assertThat(driver.switchTo().alert().getText(), is("Invalid phone number. Please enter a valid Indian phone number."));
    driver.findElement(By.id("ContactNo")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("ContactNo")).sendKeys("7573836939");
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    js.executeScript("window.scrollTo(0,0)");
  }
}
```
Navbar:
```
public class NavbarTest {
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
  public void navbar() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1382, 744));
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    driver.findElement(By.cssSelector(".MuiButton-text:nth-child(1)")).click();
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(2)")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(2)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".css-nw7qa6:nth-child(3)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".css-nw7qa6:nth-child(3)")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(4)")).click();
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(5)")).click();
    driver.findElement(By.cssSelector(".MuiBackdrop-root")).click();
  }
}
```
