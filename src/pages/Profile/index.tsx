import React from "react";

import { Container, Main, LeftSide, RightSide } from "./styles";
import ProfileData from "../../components/ProfileData";

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={"JonasTB"}
                        name={"Jonas Timbaúba"}
                        avatarUrl={"https://avatars.githubusercontent.com/u/42253103?v=4"}
                        followers={887}
                        following={10}
                        company={"Rocketseat"}
                        location={"Ceará, Brazil"}
                        email={"jonastimbauba7@hotmail.com"}
                        blog={"inkedin.com/in/jonastimbauba"}
                    />
                </LeftSide>

                <RightSide></RightSide>
            </Main>
        </Container>
    );
};

export default Profile;
