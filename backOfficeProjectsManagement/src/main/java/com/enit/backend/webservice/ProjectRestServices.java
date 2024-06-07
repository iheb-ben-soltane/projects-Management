package com.enit.backend.webservice;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.Path;

import javax.jws.WebParam;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PATCH;
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.enit.backend.business.ProjectDao;
import com.enit.backend.entity.Project;

@Stateless 
@Path("/ProjectRest")
public class ProjectRestServices {
	@EJB
	ProjectDao projectDao;
	@GET
	@Path("Projects")
	@Produces(MediaType.APPLICATION_JSON) 
	public List<Project> getAllProjectsWEB(){
		 return projectDao.getAllproject();
	}
	
	@POST
	@Path("add")
    @Produces(MediaType.APPLICATION_JSON) 
	public void addProjectWEB(@WebParam Project project ) {
		  projectDao.addProject(project);
		
	}
	
	@DELETE
	@Path("/delete/{code}")
	@Produces(MediaType.APPLICATION_JSON) 
	public void findByCodeAndDeleteWEB(@PathParam(value="code") int code)throws Exception {
		  projectDao.findByCodeAndDelete(code);
	}
	@POST
	@Path("/update/{code}/{newStartDate}/{newDescription}")
	@Produces(MediaType.APPLICATION_JSON)
	public void updateProjectWEB(
	    @PathParam(value="code") int code,
	    @PathParam(value="newStartDate") String newStartDateString, 
	    @PathParam(value="newDescription") String newDescription) throws Exception {
	    
	    
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
	    Date newStartDate = dateFormat.parse(newStartDateString);

	   
	    projectDao.updateProject(code, newStartDate, newDescription);
	}

}
