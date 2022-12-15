# TimeTrackerV2
This is a pure Angular version of Weber State's TimeTracker App. Currently supports user registration and basic clock-in/clock-out.

## Startup Instructions
For first time startup, navigate to the directory containing the docker-compose.yml (this should be the root) and run the following command:
```bash
docker-compose up --build
```
For any subsequent startups, run
```bash
docker-compose up -d
```
The -d parameter will remove trailing logs, so omit it if you'd like logs to appear in the console. Only run with --build if you make changes to the package.json or config files on either project.

## My contribution:
- All functionality on Group page including clock in/out, graphs, previous clock times, and manual clock times.
- Most tables on Instructor, Groups, Courses, Course, and Project page.
- Various bug fixes
# Page designs
![image](https://user-images.githubusercontent.com/44215639/207774762-dfa79b8a-9c83-4679-9427-83a58a5e057a.png)
![image](https://user-images.githubusercontent.com/44215639/207774825-27700f4d-1151-4509-b574-1c13a52fc400.png)
![image](https://user-images.githubusercontent.com/44215639/207774892-8e019ece-6316-46a5-b599-7c0a6707cd9e.png)
![image](https://user-images.githubusercontent.com/44215639/207774933-50d15b53-e225-4902-8378-23f3ed6806fc.png)
![image](https://user-images.githubusercontent.com/44215639/207774984-04f38d37-a4db-457d-b6b7-a55704172c7a.png)
![image](https://user-images.githubusercontent.com/44215639/207775041-7a465723-1dd7-4c43-940e-10e297d17bba.png)
![image](https://user-images.githubusercontent.com/44215639/207775097-93f86427-5c51-4417-95a0-7e3400b2b53d.png)
![image](https://user-images.githubusercontent.com/44215639/207775328-78e46fa2-c32b-4f08-9c30-024b9715ec8a.png)
![image](https://user-images.githubusercontent.com/44215639/207775406-0aefb705-81dd-4a0e-9612-fffcb6b30976.png)

