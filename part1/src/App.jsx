
// const Header = (props) => { 
//   return <h1>{props.course}</h1>
// };

// const Content = (props) => {
//   return (
//     <>
//       <p>
//         {props.part1} {props.exercises1}
//       </p>
//       <p>
//         {props.part2} {props.exercises2}
//       </p>
//       <p>
//         {props.part3} {props.exercises3}
//       </p>
//     </>
//   );
// };

// const Total = (props) => {
//   return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course}/>

//       <Content 
//       part1={parts[0].name} exercise1={parts[0].exercises}
//       part2={parts[1].name} exercise2={parts[1].exercises}
//       part3={parts[2].name} exercise3={parts[2].exercises}
//       />

//       <Total 
//         exercise1={parts[0].exercises}
//         exercise2={parts[1].exercises}
//         exercise3={parts[2].exercises}
//       />
//     </div>
//   )
// }







// const Hello = (props) => {
//   const bornYear = () => {
//     const year = new Date().getFullYear() - props.age
//     return year;
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old. I was born in {bornYear()}
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age}/>
//     </div>
//   )
// }






const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>Hello {props.name}, there is more to life than {props.value}</p>
      
    </>
  );
};


const App = () => {
  return <Hello name="Joshua" value="Women"/>
};



export default App