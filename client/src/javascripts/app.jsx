import React from 'react';
import Table from './components/table';
import Show from './components/show';
import { useRoutes } from 'hookrouter';

const routes = {
    "/": () => <Table />,
    "/:id": ({id}) => <Show id={id}/>
}

export default () => {
    const route = useRoutes(routes);
    return (
        <section className="wines">
            {route}
        </section>
    )
}