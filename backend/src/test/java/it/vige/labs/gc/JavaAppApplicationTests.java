package it.vige.labs.gc;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.util.Base64;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class JavaAppApplicationTests {

	Logger logger = LoggerFactory.getLogger(JavaAppApplicationTests.class);

	@Test
	public void loadImages() throws IOException {

		BufferedInputStream forzaItalia = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/forzaitalia.png");
		logger.info(new String(Base64.getEncoder().encodeToString(forzaItalia.readAllBytes())));
		Assert.assertNotNull(forzaItalia);

		BufferedInputStream pd = (BufferedInputStream) this.getClass().getResourceAsStream("/parties/pd.png");
		logger.info(new String(Base64.getEncoder().encodeToString(pd.readAllBytes())));
		Assert.assertNotNull(pd);

		BufferedInputStream movimento5Stelle = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/movimento5stelle.png");
		logger.info(new String(Base64.getEncoder().encodeToString(movimento5Stelle.readAllBytes())));
		Assert.assertNotNull(movimento5Stelle);

		BufferedInputStream lega = (BufferedInputStream) this.getClass().getResourceAsStream("/parties/lega.png");
		logger.info(new String(Base64.getEncoder().encodeToString(lega.readAllBytes())));
		Assert.assertNotNull(lega);

		BufferedInputStream fratellidItalia = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/fratelliditalia.png");
		logger.info(new String(Base64.getEncoder().encodeToString(fratellidItalia.readAllBytes())));
		Assert.assertNotNull(fratellidItalia);
	}

}
