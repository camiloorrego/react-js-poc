import React, { Fragment } from 'react';
import Header from '../components/Header';
import DataTable from '../components/DataTable';
import Button from '@material-ui/core/Button';
import './styles/Home.css';
import WrapperConsumer from '../store';

const home = (props) => {
    const { context } = props

    return (
        <Fragment>
            <Header title="Context API"></Header>
            <div className="Home__Actions">
                <Button onClick={props.onLoad} className="Home__Actions--load" variant="outlined" color="primary">Load</Button>
                <Button onClick={props.onClear} className="Home__Actions--clear" variant="outlined" color="primary">Clear</Button>
            </div>
            <DataTable data={context}></DataTable>

        </Fragment>
    )
}

export default WrapperConsumer(home);
