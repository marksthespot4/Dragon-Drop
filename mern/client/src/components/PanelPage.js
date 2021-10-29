import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBNav, MDBNavItem, MDBNavLink,
MDBContainer } from "mdbreact";

const PanelPage = () => {
return (
<MDBContainer>
  <MDBCard className="text-center">
    <MDBCardHeader>
      <MDBNav header>
        <MDBNavItem>
          <MDBNavLink active to="#">
            Active
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="#">Link</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink disabled to="#">
            Disabled
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Special title treatment</MDBCardTitle>
      <MDBCardText>
        With supporting text below as a natural lead-in to additional
        content.
      </MDBCardText>
      <MDBBtn color="primary">go somewhere</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
);
};

export default PanelPage;