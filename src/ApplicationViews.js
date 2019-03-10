import React, { Component } from "react"
import { Route } from "react-router-dom"
import Gallery from "./components/gallery/gallery.js"

export default class ApplicationViews extends Component {

    getRatings = movies => {
        array.forEach(movie => {
            
        });
    }
    
  render() {
    return <React.Fragment>
    <Route path="/gallery" render={(props) => {
        return <Gallery {...props} getRatings={this.getRatings} getMovies={this.getMovies} />
      }} />
      <Route exact path="/tasks/new" render={(props) => {
        return <TaskForm {...props} addTask={this.addTask} />
      }} />
      <Route exact path="/tasks/:taskId(\d+)/edit" render={(props) => {
        return <TaskEditForm {...props} updateTask={this.updateTask} />
      }} />
      </React.Fragment>
    }

}