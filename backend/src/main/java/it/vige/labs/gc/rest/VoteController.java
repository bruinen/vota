package it.vige.labs.gc.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VoteController {

	@RequestMapping("/vote")
	public Vote vote(@RequestParam(value = "email") String email, @RequestParam(value = "vote") int vote) {
		Vote result = new Vote();
		result.setEmail(email);
		result.setVote(vote);
		return result;
	}
}
