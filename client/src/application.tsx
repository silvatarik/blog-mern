import React from 'react'
import { Route, RouteChildrenProps, Switch } from 'react-router';
import routes from './config/routes';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    return (
        <Switch>
        {
            routes.map((route, index) => {
                return (
                    <Route 
                        key={index} 
                        path={route.path} 
                        exact={route.exact}
                        render={(routeProps: RouteChildrenProps<any>) => (
                            <route.component
                                {...routeProps}
                            />
                        )}
                    />
                )
            })
        }
    </Switch>
    )
}

export default Application;