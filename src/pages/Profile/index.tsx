import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from "./styles";


import ProfileData from "../../components/ProfileData";
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { APIUser, APIRepo } from '../../@types';

interface Data {
    user?: APIUser;
    repos?: APIRepo[];
    error?: string;
}

const Profile: React.FC = () => {
    const { username = 'JonasTB' } = useParams();
    const [data, setData] = useState<Data>();

    useEffect(() => {
        Promise.all([
            fetch(`http://api.github.com/users/${username}`),
            fetch(`http://api.github.com/users/${username}/repos`)
        ]).then(async reponses => {
            const [userReponse, reposReponse] = reponses;

            if (userReponse.status === 404) {
                setData({ error: 'User not found!' })
                return;
            }

            const user = await userReponse.json();
            const repos = await reposReponse.json();

            setData({
                user,
                repos
            })
        });
    }, [username]);

    if (data?.error) {
        return <h1>{data.error}</h1>
    }

    if (!data?.error || !data?.repos) {
        return <h1>Loading...</h1>
    }

    const TabContent = () => (
        <div className="content">
            <RepoIcon />
            <span className="label">Repositories</span>
            <span className="number">26</span>
        </div>
    )

    return (
        <Container>
            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset" />
                    <TabContent />
                </div>

                <span className="line" />
            </Tab>

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
                        blog={"linkedin.com/in/jonastimbauba"}
                    />
                </LeftSide>

                <RightSide>
                    <Tab className="mobile">
                        <TabContent />
                        <span className="li"></span>
                    </Tab>

                    <Repos>
                        <h2>Random Repos</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard
                                    key={n}
                                    username={'JonasTB'}
                                    reponame={'friends-app'}
                                    description={'Are you doin?'}
                                    language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>

                    <CalendarHeading>
                        Random calendar (do not represent actual data)
                    </CalendarHeading>

                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>
    );
};

export default Profile;
