import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './../styles/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './home/HomePage';
import { AboutPage } from './about/AboutPage';
import { CoursesPage } from './course/CoursesPage';
import Header from './common/Header';

export class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <Header />

                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/courses" exact component={CoursesPage} />
                </Switch>
            </div>
        );
    }
}

