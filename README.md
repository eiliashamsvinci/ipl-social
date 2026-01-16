## IPL Social

**Last Name**: Shams  
**First Name**: Eilia  
**Vinci Email**: [eilia.shams@student.vinci.be](mailto:eilia.shams@student.vinci.be)

**GitHub Repository**:  
[https://github.com/eiliashamsvinci/ipl-social.git](https://github.com/eiliashamsvinci/ipl-social.git)

### Project Description

This project sets up a simple DevOps environment using **GitHub Actions**.  
A **CI (Continuous Integration)** pipeline automatically runs the unit tests on every **push** and **pull request** to the main branch.

The project also includes a TypeScript function `validateEmail` that checks if a string is a valid email address.  
The validation includes:

- At least one '@' symbol
- At least one dot in the domain (but not at the end)
- No spaces
- Text before and after the '@' symbol

Tests are written using **TDD (Test Driven Development)** and are automatically executed through the CI pipeline.

### Running Tests

To run the tests locally, use the following command:

```bash
npm test
```
