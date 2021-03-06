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
	public void loadParties() throws IOException {

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

		BufferedInputStream autonomistiPopolari = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/autonomistipopolari.png");
		logger.info(new String(Base64.getEncoder().encodeToString(autonomistiPopolari.readAllBytes())));
		Assert.assertNotNull(autonomistiPopolari);

		BufferedInputStream cercasiPartito = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/cercasipartito.png");
		logger.info(new String(Base64.getEncoder().encodeToString(cercasiPartito.readAllBytes())));
		Assert.assertNotNull(cercasiPartito);

		BufferedInputStream futura2018 = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/futura2018.png");
		logger.info(new String(Base64.getEncoder().encodeToString(futura2018.readAllBytes())));
		Assert.assertNotNull(futura2018);

		BufferedInputStream laltraEuropa = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/laltraeuropa.png");
		logger.info(new String(Base64.getEncoder().encodeToString(laltraEuropa.readAllBytes())));
		Assert.assertNotNull(laltraEuropa);

		BufferedInputStream legaNord = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/leganord.png");
		logger.info(new String(Base64.getEncoder().encodeToString(legaNord.readAllBytes())));
		Assert.assertNotNull(legaNord);

		BufferedInputStream partitoSocialista = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/partitosocialista.png");
		logger.info(new String(Base64.getEncoder().encodeToString(partitoSocialista.readAllBytes())));
		Assert.assertNotNull(partitoSocialista);

		BufferedInputStream partitoRadicale = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/partitoradicale.png");
		logger.info(new String(Base64.getEncoder().encodeToString(partitoRadicale.readAllBytes())));
		Assert.assertNotNull(partitoRadicale);

		BufferedInputStream sceltaEuropea = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/parties/sceltaeuropea.png");
		logger.info(new String(Base64.getEncoder().encodeToString(sceltaEuropea.readAllBytes())));
		Assert.assertNotNull(sceltaEuropea);
	}

	@Test
	public void loadCandidates() throws IOException {

		BufferedInputStream candidate1 = (BufferedInputStream) this.getClass()
				.getResourceAsStream("/candidates/candidate1.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate1.readAllBytes())));
		Assert.assertNotNull(candidate1);

		BufferedInputStream candidate2 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate2.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate2.readAllBytes())));
		Assert.assertNotNull(candidate2);

		BufferedInputStream candidate3 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate3.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate3.readAllBytes())));
		Assert.assertNotNull(candidate3);

		BufferedInputStream candidate4 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate4.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate4.readAllBytes())));
		Assert.assertNotNull(candidate4);

		BufferedInputStream candidate5 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate5.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate5.readAllBytes())));
		Assert.assertNotNull(candidate5);

		BufferedInputStream candidate6 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate6.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate6.readAllBytes())));
		Assert.assertNotNull(candidate6);

		BufferedInputStream candidate7 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate7.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate7.readAllBytes())));
		Assert.assertNotNull(candidate7);

		BufferedInputStream candidate8 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate8.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate8.readAllBytes())));
		Assert.assertNotNull(candidate8);

		BufferedInputStream candidate9 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate9.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate9.readAllBytes())));
		Assert.assertNotNull(candidate9);

		BufferedInputStream candidate10 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate10.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate10.readAllBytes())));
		Assert.assertNotNull(candidate10);

		BufferedInputStream candidate11 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate11.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate11.readAllBytes())));
		Assert.assertNotNull(candidate11);

		BufferedInputStream candidate12 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate12.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate12.readAllBytes())));
		Assert.assertNotNull(candidate12);

		BufferedInputStream candidate13 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate13.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate13.readAllBytes())));
		Assert.assertNotNull(candidate13);

		BufferedInputStream candidate14 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate14.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate14.readAllBytes())));
		Assert.assertNotNull(candidate14);

		BufferedInputStream candidate15 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate15.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate15.readAllBytes())));
		Assert.assertNotNull(candidate15);

		BufferedInputStream candidate16 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate16.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate16.readAllBytes())));
		Assert.assertNotNull(candidate16);

		BufferedInputStream candidate17 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate17.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate17.readAllBytes())));
		Assert.assertNotNull(candidate17);

		BufferedInputStream candidate18 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate18.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate18.readAllBytes())));
		Assert.assertNotNull(candidate18);

		BufferedInputStream candidate19 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate19.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate19.readAllBytes())));
		Assert.assertNotNull(candidate19);

		BufferedInputStream candidate20 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate20.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate20.readAllBytes())));
		Assert.assertNotNull(candidate20);

		BufferedInputStream candidate21 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate21.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate21.readAllBytes())));
		Assert.assertNotNull(candidate21);

		BufferedInputStream candidate22 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate22.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate22.readAllBytes())));
		Assert.assertNotNull(candidate22);

		BufferedInputStream candidate23 = (BufferedInputStream) this.getClass().getResourceAsStream("/candidates/candidate23.png");
		logger.info(new String(Base64.getEncoder().encodeToString(candidate23.readAllBytes())));
		Assert.assertNotNull(candidate23);
	}

}
