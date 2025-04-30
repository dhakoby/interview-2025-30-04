# interview-2025-30-04

Route /exec {
    actionType: 'sendEmail' | 'sendSMS' | 'conditional' | 'loop',
    params: {
        from: string,
        to: string,
        next?: T
    } | 
    {
        phone_number: number,
        next?: T
    } |
    {
        condition: string,
        trueCase?: T,
        falseCase?: T
    } |
    {
        count: number,
        sub: T
    }
} as T

### Second task

1. The domains of the companies using the gPlatform service, should be pointed to the gPlatform service backend (using DNS records) and using HTTPS for security and then, from the domain name, the service can identify which company's information should be served or game should run.

2. We can create another table, called companies and another pivot table (users_to_companies) which will have company_id and user_id, so we can map user to company and have same users to be in different companies.

3. When logging user, the backend will check the domain for getting the company_id from the companies table. Then generate a jwt token for that user, including the company_id and keep the jwt token in the cookie with httpOnly and secure and domain for security reasons.