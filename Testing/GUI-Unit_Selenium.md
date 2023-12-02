
## GUI-Unit_Testing

#### Java Junit using Selenium

#### Group-29


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
Customer Components:

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
Home Page:
```
public class HomepageTest {
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
  public void homepage() {
    driver.get("https://canteenautomation-cc940.web.app/home");
    driver.manage().window().setSize(new Dimension(1382, 744));
    driver.findElement(By.cssSelector("#root > div > div > div:nth-child(1) > div")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div:nth-child(1) > div > img")).click();
    driver.findElement(By.cssSelector(".MuiButton-text:nth-child(1)")).click();
    driver.findElement(By.cssSelector("#one > .MuiTypography-h4")).click();
    driver.findElement(By.id("two")).click();
    driver.findElement(By.id("three")).click();
    driver.findElement(By.cssSelector("#three > .MuiTypography-h4")).click();
    driver.findElement(By.cssSelector(".css-1padm8r")).click();
    driver.findElement(By.cssSelector("div:nth-child(2) > div > img")).click();
  }
}
```
Footer:
```
public class FooterTest {
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
  public String waitForWindow(int timeout) {
    try {
      Thread.sleep(timeout);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    Set<String> whNow = driver.getWindowHandles();
    Set<String> whThen = (Set<String>) vars.get("window_handles");
    if (whNow.size() > whThen.size()) {
      whNow.removeAll(whThen);
    }
    return whNow.iterator().next();
  }
  @Test
  public void footer() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1382, 744));
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    vars.put("window_handles", driver.getWindowHandles());
    driver.findElement(By.linkText("Facebook")).click();
    vars.put("win8039", waitForWindow(2000));
    vars.put("root", driver.getWindowHandle());
    driver.switchTo().window(vars.get("win8039").toString());
    js.executeScript("window.scrollTo(0,0)");
    driver.close();
    driver.switchTo().window(vars.get("root").toString());
    vars.put("window_handles", driver.getWindowHandles());
    driver.findElement(By.linkText("Twitter")).click();
    vars.put("win8357", waitForWindow(2000));
    driver.switchTo().window(vars.get("win8357").toString());
    driver.close();
    driver.switchTo().window(vars.get("root").toString());
    vars.put("window_handles", driver.getWindowHandles());
    driver.findElement(By.linkText("Instagram")).click();
    vars.put("win5186", waitForWindow(2000));
    driver.switchTo().window(vars.get("win5186").toString());
    driver.close();
    driver.switchTo().window(vars.get("root").toString());
    driver.findElement(By.linkText("About Us")).click();
    driver.findElement(By.linkText("Mission")).click();
  }
}
```
Order_Placing:
```
public class OrderNowTest {
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
  public void orderNow() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1366, 728));
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-contained:nth-child(3)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-contained:nth-child(3)")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-text:nth-child(1)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.xpath("(//a[contains(text(),\'Order\')])[3]"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.xpath("(//a[contains(text(),\'Order\')])[3]")).click();
    driver.findElement(By.id("search")).click();
    {
      WebElement element = driver.findElement(By.xpath("(//button[@id=\'1\']/h5)[2]"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("search")).sendKeys("ROTI");
    driver.findElement(By.xpath("(//button[@id=\'1\']/h5)[2]")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector(".css-1doe6z2")).click();
    assertThat(driver.switchTo().alert().getText(), is("By updating your cart, your past cart will be cleared. Do you want to procced?"));
    driver.switchTo().alert().accept();
    assertThat(driver.switchTo().alert().getText(), is("Your cart is updated"));
    driver.findElement(By.cssSelector(".MuiButton-startIcon > .MuiSvgIcon-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    driver.findElement(By.cssSelector(".css-noywnv")).click();
  }
}
```
Cart:

Empty Cart:
```
public class InitialCartTest {
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
  public void initialCart() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(691, 372));
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(9)")).click();
    driver.findElement(By.cssSelector(".css-13955m6")).click();
    driver.findElement(By.cssSelector(".css-169wvan")).click();
    driver.findElement(By.cssSelector(".css-169wvan")).click();
    driver.findElement(By.cssSelector(".css-13955m6")).click();
    driver.findElement(By.cssSelector(".css-13955m6")).click();
    driver.findElement(By.cssSelector(".css-13955m6")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".css-13955m6"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.cssSelector(".css-13955m6")).click();
    driver.findElement(By.cssSelector(".css-13955m6")).click();
  }
}
```
Filled Cart:
```
public void cart() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1382, 744));
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(9)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(9)")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    

    driver.findElement(By.cssSelector("div:nth-child(6) .MuiGrid-root:nth-child(2) .MuiTypography-root")).click();
    // 6 roti of 7 each 
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(6) .MuiGrid-root:nth-child(2) .MuiTypography-root"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }

    // 4 Tomato Chutney of 5 each 
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).clickAndHold().perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).release().perform();
    }
    //Total cost in the cart = 7*6 + 5*4 = 62
    driver.findElement(By.cssSelector(".MuiDrawer-paperAnchorRight > .MuiBox-root > div > div:nth-child(2)")).click();
    driver.findElement(By.cssSelector("div:nth-child(2) > .css-isbt42 > .MuiGrid-root:nth-child(3)")).click();
    
    driver.findElement(By.cssSelector(".css-noywnv")).click();
    assertThat(driver.switchTo().alert().getText(), is("Payment Successful"));
  }
```
Pending Order:
```
public class PendingordersTest {
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
  public void pendingorders() {
    driver.get("https://canteenautomation-cc940.web.app/");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-text:nth-child(3)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-text:nth-child(3)")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(3)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector("u")).click();
    driver.findElement(By.cssSelector("u")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(1)")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div > .css-936v5x > .MuiGrid-root:nth-child(2)")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)")).click();
    driver.manage().window().setSize(new Dimension(691, 372));
  }
}
```
Account Slider:
```
public class AccountSliderTest {
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
  public void accountSlider() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(691, 372));
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(7)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(7)")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector(".MuiBox-root div:nth-child(3)")).click();
    driver.findElement(By.cssSelector(".MuiBox-root div:nth-child(3)")).click();
    driver.findElement(By.cssSelector(".MuiTypography-h5:nth-child(1)")).click();
    driver.findElement(By.cssSelector(".css-1qnimer")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".css-1fzhm7v"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".css-1fzhm7v")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Do you want to Sign Out?"));
    driver.switchTo().alert().accept();
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
  }
}
```
Order History:
```
public class AllordersOrderhistoryTest {
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
  public void allordersOrderhistory() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(691, 372));
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(4)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(4)")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector("div:nth-child(3) > div:nth-child(3) > div:nth-child(2)")).click();
    driver.findElement(By.cssSelector("div > div:nth-child(3) > div:nth-child(3)")).click();
    driver.findElement(By.cssSelector("div > div:nth-child(3) > div:nth-child(3)")).click();
  }
}
```
Feedback:
```
public class FeedbackTest {
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
  public void feedback() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1382, 744));
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(2)")).click();
    driver.findElement(By.id("80")).click();
    driver.findElement(By.id("80")).sendKeys("Nice Food, Don\'t try again");
    driver.findElement(By.cssSelector("div:nth-child(2) > div > #\\38 0")).click();
    assertThat(driver.switchTo().alert().getText(), is("Are you sure you want to submit!"));
    driver.switchTo().alert().dismiss();
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(2) > div > #\\38 0"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector("div:nth-child(2) > div > #\\38 0")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Are you sure you want to submit!"));
    driver.switchTo().alert().accept();
    driver.findElement(By.id("81")).click();
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(2) > div > #\\38 1"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("81")).sendKeys("Yeah, rasam for 10, should give 100 in return");
    driver.findElement(By.cssSelector("div:nth-child(2) > div > #\\38 1")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Are you sure you want to submit!"));
    driver.switchTo().alert().accept();
    driver.findElement(By.cssSelector("div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div")).click();
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
  }
}
```
Canteen Components:

Canteen Home:
```
public class CanteenHomeTest {
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
  public void canteenHome() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1382, 744));
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.id("Email")).click();
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    driver.findElement(By.cssSelector("a:nth-child(1) > .MuiButtonBase-root")).click();
    driver.findElement(By.id("search")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".css-12v0qyo"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".css-12v0qyo")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    //Add item
    driver.findElement(By.id("Name")).click();
    driver.findElement(By.id("Name")).sendKeys("Sev khamani");
    driver.findElement(By.id("Price")).click();
    driver.findElement(By.id("Price")).sendKeys("30");
    driver.findElement(By.cssSelector(".css-18cy3bg")).click();
    assertThat(driver.switchTo().alert().getText(), is("Are you sure you want to add this item?"));
    driver.switchTo().alert().dismiss();
    {
      WebElement element = driver.findElement(By.cssSelector(".css-18cy3bg"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".css-18cy3bg")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Are you sure you want to add this item?"));
    driver.switchTo().alert().accept();
    {
      WebElement element = driver.findElement(By.cssSelector(".css-12v0qyo"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".css-12v0qyo")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.id("Name")).click();
    driver.findElement(By.id("search")).click();
    driver.findElement(By.id("search")).click();
    driver.findElement(By.id("Name")).click();
    driver.findElement(By.id("Name")).sendKeys("Roti");
    driver.findElement(By.id("Price")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".css-18cy3bg"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("Price")).sendKeys("7");
    driver.findElement(By.cssSelector(".css-18cy3bg")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Are you sure you want to add this item?"));
    driver.switchTo().alert().accept();

    //Remove item 
    driver.findElement(By.id("110")).click();
    assertThat(driver.switchTo().alert().getText(), is("On clicking OK, whole item will be permanentely deleted."));
    driver.switchTo().alert().accept();
    driver.findElement(By.id("95")).click();
    assertThat(driver.switchTo().alert().getText(), is("On clicking OK, whole item will be permanentely deleted."));
    driver.switchTo().alert().accept();
    driver.findElement(By.id("search")).click();
    driver.findElement(By.id("search")).click();
    driver.findElement(By.cssSelector("#root > div > div > div > div > div:nth-child(2)")).click();
  }
}
```
Canteen Feedback:
```
public class CanteenFeedbackTest {
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
  public void canteenFeedback() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(691, 372));
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(2)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(2)")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector("div:nth-child(1) > div > div > div > .MuiTypography-h7")).click();
    driver.findElement(By.cssSelector(".css-1xvinid")).click();
    driver.findElement(By.cssSelector(".css-1xvinid")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div > div > div:nth-child(3) > div:nth-child(3)")).click();
    driver.findElement(By.cssSelector("div:nth-child(3) > div:nth-child(3) > div:nth-child(2)")).click();
    driver.findElement(By.cssSelector("div:nth-child(3) > div:nth-child(3) > div:nth-child(2)")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div > .css-raxs74 > .MuiGrid-root:nth-child(3)")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div > .css-raxs74 > .MuiGrid-root:nth-child(3)")).click();
    {
      WebElement element = driver.findElement(By.cssSelector("div:nth-child(1) > div > .css-raxs74 > .MuiGrid-root:nth-child(3)"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
  }
}
```
Canteen Order History:
```
public class CanteenOrderHistoryTest {
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
  public String waitForWindow(int timeout) {
    try {
      Thread.sleep(timeout);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    Set<String> whNow = driver.getWindowHandles();
    Set<String> whThen = (Set<String>) vars.get("window_handles");
    if (whNow.size() > whThen.size()) {
      whNow.removeAll(whThen);
    }
    return whNow.iterator().next();
  }
  @Test
  public void canteenOrderHistory() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1382, 744));
    {
      WebElement element = driver.findElement(By.linkText("Forgot Password"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.id("Email")).sendKeys("202101473@daiict.ac.in");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.id("Email")).click();
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector("a:nth-child(4) > .MuiButtonBase-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector("a:nth-child(4) > .MuiButtonBase-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector("div:nth-child(1) > div > .MuiTypography-body1:nth-child(4)")).click();
    vars.put("window_handles", driver.getWindowHandles());
    driver.findElement(By.linkText("Facebook")).click();
    vars.put("win9272", waitForWindow(2000));
    vars.put("root", driver.getWindowHandle());
    driver.switchTo().window(vars.get("win9272").toString());
    driver.close();
    driver.switchTo().window(vars.get("root").toString());
    vars.put("window_handles", driver.getWindowHandles());
    driver.findElement(By.linkText("Twitter")).click();
    vars.put("win1921", waitForWindow(2000));
    driver.switchTo().window(vars.get("win1921").toString());
    driver.close();
    driver.switchTo().window(vars.get("root").toString());
    driver.findElement(By.cssSelector("a:nth-child(2) > .MuiButtonBase-root")).click();
  }
}
```
Canteen Pending Order:
```
public class CanteenPendingOrdersTest {
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
  public void canteenPendingOrders() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(1382, 744));
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    driver.findElement(By.cssSelector("a:nth-child(3) > .MuiButtonBase-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector("a:nth-child(3) > .MuiButtonBase-root"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    driver.findElement(By.cssSelector("div:nth-child(1) > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)")).click();
    driver.findElement(By.cssSelector("div:nth-child(1) > div > .MuiTypography-body1:nth-child(2)")).click();
    {
      WebElement element = driver.findElement(By.id("70"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.id("70")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Click OK to confirm!"));
    driver.switchTo().alert().dismiss();
    driver.findElement(By.id("70")).click();
    assertThat(driver.switchTo().alert().getText(), is("Click OK to confirm!"));
    driver.switchTo().alert().accept();
    driver.findElement(By.id("74")).click();
    assertThat(driver.switchTo().alert().getText(), is("Click OK to confirm!"));
    driver.switchTo().alert().accept();
  }
}
```
Canteen  Account Slider:
```
public class CanteenAccountsliderTest {
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
  public void canteenAccountslider() {
    driver.get("https://canteenautomation-cc940.web.app/");
    driver.manage().window().setSize(new Dimension(691, 372));
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    driver.findElement(By.cssSelector(".MuiButton-root")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-root"));
      Actions builder = new Actions(driver);
      builder.doubleClick(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButtonBase-root:nth-child(5)")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".css-1fzhm7v"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".css-1fzhm7v")).click();
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
    assertThat(driver.switchTo().alert().getText(), is("Do you want to Sign Out?"));
    driver.switchTo().alert().accept();
    driver.findElement(By.id("Email")).sendKeys("padma_kamal@gmail.com");
    driver.findElement(By.id("Password")).sendKeys("1234567@a");
    driver.findElement(By.cssSelector(".MuiContainer-maxWidthXl")).click();
  }
}
```
