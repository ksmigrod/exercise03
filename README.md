# Exercise 03

This application is designed to run against server built in Exercise 02.

This application displays filterable list of employees.

Your task is to expand this application.

## Functional requirements

 1. Please add a tab with list of departments, one row per department, with the following columns:
     - id of department
     - name of department
     - number of employees
 2. Implement filtering by partial department name.
 
## Non functional requirement

 1. Please keep your solution consistent in style and architecture
    with the existing code.

# Technical details

## Building and running
This sample uses webpack.
 
Install required dependencies with `npm install`.
 
Run development server with `npm start`.

## Data source

If you were unable to finish Exercise 02:
 
 1. Clone that repository to new location.
 2. Create file `src/main/java/pl/gov/mofnet/giif/rekrutacja/boundary/DepartmentsResource.java`:
     ```java
     package pl.gov.mofnet.giif.rekrutacja.boundary;
     
     import pl.gov.mofnet.giif.rekrutacja.hr.to.DepartmentTO;
     
     import javax.enterprise.context.RequestScoped;
     import javax.inject.Inject;
     import javax.ws.rs.GET;
     import javax.ws.rs.Path;
     import javax.ws.rs.Produces;
     import javax.ws.rs.core.MediaType;
     import java.util.List;
     
     /**
      *
      * @author ksm
      */
     @RequestScoped
     @Path("departments")
     public class DepartmentsResource {
         
         @GET
         @Produces({MediaType.APPLICATION_JSON})
         public List<DepartmentTO> listOfDepartments() {
            List<DepartmentTO> result = new ArrayList<>();
            result.add(new DepartmentTO(100, "Finance", 6));
            result.add(new DepartmentTO(140, "Control And Credit", 0));
            result.add(new DepartmentTO(50, "Shipping", 45));
            result.add(new DepartmentTO(70, "Public Relations", 1));
            result.add(new DepartmentTO(250, "Retail Sales", 0));
            result.add(new DepartmentTO(120, "Treasury", 0));
            result.add(new DepartmentTO(220, "NOC", 0));
            result.add(new DepartmentTO(230, "IT Helpdesk", 0));
            result.add(new DepartmentTO(240, "Government Sales", 0));
            result.add(new DepartmentTO(30, "Purchasing", 6));
            result.add(new DepartmentTO(90, "Executive", 3));
            result.add(new DepartmentTO(200, "Operations", 0));
            result.add(new DepartmentTO(10, "Administration", 1));
            result.add(new DepartmentTO(110, "Accounting", 2));
            result.add(new DepartmentTO(130, "Corporate Tax", 0));
            result.add(new DepartmentTO(170, "Manufacturing", 0));
            result.add(new DepartmentTO(180, "Construction", 0));
            result.add(new DepartmentTO(190, "Contracting", 0));
            result.add(new DepartmentTO(40, "Human Resources", 1));
            result.add(new DepartmentTO(20, "Marketing", 2));
            result.add(new DepartmentTO(60, "IT", 5));
            result.add(new DepartmentTO(80, "Sales", 34));
            result.add(new DepartmentTO(160, "Benefits", 0));
            result.add(new DepartmentTO(210, "IT Support", 0));
            result.add(new DepartmentTO(150, "Shareholder Services", 0));
            result.add(new DepartmentTO(260, "Recruiting", 0));
            result.add(new DepartmentTO(270, "Payroll", 0));
            return result;     
         }
         
     }
     ```
 3. Modify method getClasses in `src/main/java/pl/gov/mofnet/giif/rekrutacja/boundary/ApplicationConfig.java`:
     ```java
    package pl.gov.mofnet.giif.rekrutacja.boundary;
    
    import java.util.HashSet;
    import java.util.Set;
    import javax.ws.rs.ApplicationPath;
    import javax.ws.rs.core.Application;
    
    /**
    *
    * @author ksm
    */
    @ApplicationPath("/")
    public class ApplicationConfig extends Application {
    
        @Override
        public Set<Class<?>> getClasses() {
            Set<Class<?>> resources = new HashSet<>();
            resources.add(EmployeesResource.class);
            resources.add(DepartmentsResource.class);
            return resources;
        }
    
    }
     ```
 4. Run project with the following command:
     ```
     mvn clean package tomee:run
     ```
