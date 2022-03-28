package runners;

import org.junit.runner.RunWith;
import static org.junit.Assert.*;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"html:target/cucumber-report"},
		features = "src/test/resources/features/",
		glue = "stepsDefinitions",
		dryRun = false,
		tags = {""},
		snippets = SnippetType.CAMELCASE,
		monochrome = true
		)

public class RunnerTest {
	

}