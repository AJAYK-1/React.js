import './App.css'
import Home from './Components/Home'
import HelloWorld from './Components/Basics/HelloWorld'
import VariableInJS from './Components/Basics/VariableinJS'
import PassProps from './Components/DataFlow/PassProps'
import UsingProps from './Components/DataFlow/UsingProps'
import UseStateHook from './Components/useStateHook/useStateHook'
import { Route, Routes } from 'react-router-dom'
import FormsInReact from './Components/useStateHook/formsInReact'
import UseEffectHook from './Components/useEffectHook/useEffectHook'
import UseRefHook from './Components/useRefHook/useRefHook'
import Timer from './Components/useRefHook/Timer'
import WithoutMemo from './Components/useMemoHook/withoutMemo'
import UseMemoHook from './Components/useMemoHook/useMemoHook'
import Parent from './Components/useCallBackHook/Parent'
import WithoutuseCallback from './Components/useCallBackHook/withoutuseCallback'
import Parent1 from './Components/DataFlow/Parent1'
import Counter from './Components/useCustomHook/Counter'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hello-world' element={<HelloWorld />} />
        <Route path='/variable-in-JS' element={<VariableInJS />} />
        <Route path='/pass-props' element={<PassProps />} />
        <Route path='/using-props' element={<UsingProps />} />
        <Route path='/usestate-hook' element={<UseStateHook />} />
        <Route path='/forms-in-react' element={<FormsInReact />} />
        <Route path='/useEffect-hook' element={<UseEffectHook />} />
        <Route path='/useRef-hook' element={<UseRefHook />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/without-memo' element={<WithoutMemo />} />
        <Route path='/useMemo-hook' element={<UseMemoHook />} />
        <Route path='/useCallback-hook' element={<Parent />} />
        <Route path='/without-useCallback' element={<WithoutuseCallback />} />
        <Route path='/child-to-parent' element={<Parent1 />} />
        <Route path='/custom-hook-sample' element={<Counter />} />
      </Routes>
    </>
  )
}

export default App
