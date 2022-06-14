import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";

function StudentProfiles()  {

    const [info, setInfo] = useState();
    const [input, setInput] = useState('');
    const [filtered, setFiltered] = useState([]);
   
    
    useEffect(() => {
        
         fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(json => console.log(json))
    },[]);
    
    
    
    const filterChange = (e) => {
        e.preventDefault();
        const target = e.target.value;
        setInput(target);

        if(input !== '') {
            const result = info && info.filter((user) => {
                return user.firstName.toLowerCase().startsWith(input.toLowerCase()); 
            });
            setFiltered(result);
        } if(input !== '') {
            const result = info && info.filter((person) => {
                return person.lastName.toLowerCase().startsWith(input.toLowerCase()); 
            });
            setFiltered(result);
        } else {
             setFiltered(info);
        }
    }
        
        
         const gradePopulate = () => {
                 info && info.map((grades) => {
                    const listGrades = grades.grades;
                   console.log(listGrades);
                    });
             
         }

    return (
        <div>
            <Card className="card">
                <CardContent className="scrollbar scrollbar-primary mt-5 mx-auto">
                    <Input
                    className="searchBar"
                    icon="search"
                    placeholder="Search by name"
                    onChange={filterChange}
                    value={input}
                    />
                    {filtered.map((name) => (
                        <ul className = "border" key={name.id}>
                            <Grid item xs={3} sm={6} md={12} style={{display: "flex", gap:"3.5rem", paddingBottom:"8px"}}>
                                <img alt ="" src={name.pic} className="picture"></img> 
                                <Grid  container style={{display: "inline"}} align="left" justifyContent="flex-end" alignItems="flex-start">
                                    <Grid  className="studentNames">
                                    <span>{name.firstName + " " + name.lastName}</span>
                                        <Button  onClick={gradePopulate} className="plus">+</Button>
                                    </Grid>
                                    <span>{name.email}</span>
                                    <br/>
                                    <span>{name.company}</span>
                                    <br/>
                                    <span>{name.skill}</span>
                                    <br/>
                                    <span>Average: {9}%</span>
                                </Grid>
                            </Grid>
                        </ul>
                ))}
                </CardContent>
            </Card>
        </div>
    ) 
}



export default StudentProfiless;

