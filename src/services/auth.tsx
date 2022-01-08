export function signIn(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        user:{
          user:'brunoluizra',
          email:'brunoluizra@yahoo.com.br',
        }
      })
    }, 2000);
  });

}