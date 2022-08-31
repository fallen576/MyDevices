import React from 'react'

export default function Device({mac,hostname,ip}) {
    return (
        <div className="device card">
            <img className="card-img-top" src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">{hostname}</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Type</th>
                        </tr>
                        <tr>
                            <th>{ip}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type here</td>
                            <td>{mac}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">Rescan</button>
                <button className="btn btn-danger">Delete</button> 
            </div>
        </div>
            )
        }
