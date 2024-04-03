# Security Considerations

- Data Privacy & Confidentiality
  - The dev environment should have no access to production data.
  - it might need access to your private network if your source code platform (eg github or bitbucket) is hosted there.
- Access Control
  - Both the dev environment platform and the source code should be managed with standard AD security and MFA.
- Network Security
  - By default the dev environment should have no access to any other private network.  
- Reliance on External Services
  - The dev environment might need to access service providers and this should be managed utilizing standard tooling like `az`, `https` or `ssh`   
