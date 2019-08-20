import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import Registration from './Registration.page';
import Login from './Login.page';
import CertificateRequest from './RequestCertificate.page';
import CertificateDownload from './CertificateDownload.page';
import SignatureUpload from './SignatureUpload.page';
import SignatureGetLink from './SignatureGetLink.page';

import { endpoints } from './connect.constant';

const IndexRoutes = (props) => {
  
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={endpoints.REGISTER}/>}/>
      <Route path={endpoints.REGISTER} component={Registration}/>
      <Route path={endpoints.LOGIN} component={Login}/>
      <Route path={endpoints.CERTIFICATE_REQUEST} component={CertificateRequest}/>
      <Route path={endpoints.CERTIFICATE_DOWNLOAD} component={CertificateDownload}/>
      <Route path={endpoints.SIGNATURE_UPLOAD} component={SignatureUpload}/>
      <Route path={endpoints.GET_SIGNATURE_LINK} component={SignatureGetLink}/>
      
      {/* <PrivateRoute path={endpoints.CERTIFICATE_REQUEST} component={CertificateRequest}/>
      <PrivateRoute path={endpoints.CERTIFICATE_DOWNLOAD} component={CertificateDownload}/>
      <PrivateRoute path={endpoints.SIGNATURE_UPLOAD} component={SignatureUpload}/>
      <PrivateRoute path={endpoints.GET_SIGNATURE_LINK} component={SignatureGetLink}/>
      <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={Protected} /> */}
    </Switch>
)};

// const fakeAuth = {
//   isAuthenticated:false,
//   authenticate(cb){
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout(cb){
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const AuthButton = withRouter(
//   ({history}) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome {""}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//         >
//           Sign out
//         </button>
//         </p>
//   ) : (
//     <p> you are not logged in</p>
//     )
// );

// function PrivateRoute({ component:Component,...rest}){
//   return(
//     <Route
//     {...rest}
//       render={props => 
//         fakeAuth.isAuthenticated ? (
//           <Component {...props}/>
//         ) : (
//           <Redirect 
//               to={{
//                 pathname:endpoints.LOGIN,
//                 state:{from:props.location}
//               }}
//               />
//         )
//       }
//       />
//   );
// }

// function Public() {
//   return <h3>Public</h3>;
// }

// function Protected() {
//   return <h3>Protected</h3>;
// }

export default IndexRoutes;