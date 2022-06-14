import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { Input } from "@material-ui/core";

function StudentProfiles()  {

    const [info, setInfo] = useState();
    const [input, setInput] = useState('');
    const [filtered, setFiltered] = useState([]);
   
    
    useEffect(() => {
        
         fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(json => setInfo(json.users))
    },[]);
    
    
    
    const filterChange = (Value) => {
        setInput(Value)
        if(input !== '') {
            const result = info && info.filter((user) => {
                return Object.values(user).join('').toLowerCase().includes(input.toLowerCase())
            });
            setFiltered(result);
        } 
        else {
             setFiltered(info);
        }
    }

    return (
        <div>
            <Card className="card">
                <CardContent className="scrollbar scrollbar-primary mt-5 mx-auto">
                    <Input
                    className="searchBar"
                    icon="search"
                    placeholder="Search User"
                    onChange={(e) => filterChange(e.target.value)}
                    value={input}
                    />
                   {input.length > 1 ? (
                       filtered.map((name) => (
                        <ul className = "border" key={name.id}>
                            <Grid item xs={3} sm={6} md={12} style={{display: "flex", gap:"3.5rem", paddingBottom:"8px"}}>
                                <img alt ="" src={name.image} className="picture"></img> 
                                <Grid  container style={{display: "inline"}} align="left" justifyContent="flex-end" alignItems="flex-start">
                                    <Grid  className="studentNames">
                                    <span>{name.firstName + " " + name.lastName}</span>
                                    </Grid>
                                    <span>Email: {name.email}</span>
                                    <br/>
                                    <span>Age: {name.age}</span>
                                    <br/>
                                    <span>Phone Number: {name.phone}</span>
                                </Grid>
                            </Grid>
                        </ul>
                ))
                   ) : (
                    info && info.map((name) => (
                        <ul className = "border" key={name.id}>
                            <Grid item xs={3} sm={6} md={12} style={{display: "flex", gap:"3.5rem", paddingBottom:"8px"}}>
                                <img alt ="" src={name.image} className="picture"></img> 
                                <Grid  container style={{display: "inline"}} align="left" justifyContent="flex-end" alignItems="flex-start">
                                    <Grid  className="studentNames">
                                    <span>{name.firstName + " " + name.lastName}</span>
                                    </Grid>
                                    <span>Email: {name.email}</span>
                                    <br/>
                                    <span>Age: {name.age}</span>
                                    <br/>
                                    <span>Phone Number: {name.phone}</span>
                                </Grid>
                            </Grid>
                        </ul>
                ))
                   )

                   } 
                </CardContent>
            </Card>
        </div>
    ) 
}



export default StudentProfiles;

