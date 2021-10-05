import { useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';


const App = ()=>{

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o Pão na padaria', done: false},
    {id: 2, name: 'Comprar um bolo na padaria', done: true},
  ]);
   
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    newList.forEach(e => {
      if(e.id === id){
        e.done = done
      }
    });

    setList(newList);
  }
  
  const handleAddtask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>   
        <AddArea onEnter={handleAddtask} />  
        {list.map((item, index)=>(
          <ListItem 
          key={index} 
          item={item} 
          onChange={handleTaskChange}
          />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;