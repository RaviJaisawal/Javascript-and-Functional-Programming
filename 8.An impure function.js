const fetchLoginToken = externalAPI.getUserToken


/*
A pure function will not cause side effects. 
A side effect is any change in the system that is observable to the outside world.
*/ 

const calculateBill = (sumOfCart, tax) => sumOfCart * tax;

/*
Why should our functions be pure?
Readability -> Side effects make our code harder to read. Since a non pure function is not deterministic 
it may return several different values for a given input. We end up writing code that needs to account 
for the different possibilities. Let’s look at another http based example:
*/

async function getUserToken(id) {
    const token = await getTokenFromServer(id);
    return token;
}
