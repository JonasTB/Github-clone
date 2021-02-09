import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";


import ProfileData from "../../components/ProfileData";
import RepoCard from '../../components/RepoCard';

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

                <RightSide>
                    <Repos>
                        <h2>Random Repos</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard 
                                key={n}
                                username={'JonasTB'}
                                reponame={'Frinds-App'}
                                description={'Are you doin?'}
                                language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                                stars={8}
                                forks={4}
                                />
                            ))}
                        </div>
                    </Repos>
                </RightSide>
            </Main>
        </Container>
    );
};

export default Profile;
