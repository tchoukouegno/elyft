/** 
   *module responsible for managing all the application's routes
   * @param {} 
   * @return {html} jsx

 */

   import {Routes,Route} from 'react-router-dom';
   import { Header } from '../widgets/Header';




   export function RoutesApp () {






    return(

        <>
        
        
        <Routes>

            <Route index element={<Header/>}/>



        </Routes>
        
        
        
        
        
        
        
        
        
        
        
        </>


    )









   }