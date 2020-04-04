package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.ChuckDTO;
import dto.DadDTO;
import dto.ResponseDTO;
import jokefetcher.JokeFetcher;
import utils.HttpUtils;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import java.io.IOException;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
public class JokeResource {
    Gson gson = new GsonBuilder().setPrettyPrinting().create();

    @Context
    private UriInfo context;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() throws IOException {
        ChuckDTO chuck = gson.fromJson(HttpUtils.fetchData("https://api.chucknorris.io/jokes/random"), ChuckDTO.class);
        DadDTO dad = gson.fromJson(HttpUtils.fetchData("https://icanhazdadjoke.com"), DadDTO.class);
        return gson.toJson(new ResponseDTO(chuck, dad));
    }

   
}
