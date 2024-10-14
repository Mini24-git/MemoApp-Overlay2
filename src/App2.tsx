import {useState} from "react";
import { register } from '@tauri-apps/plugin-global-shortcut';

async function handleKeys(){
    await register('CommandOrControl+Shift+V', () => {
        console.log('Shortcut triggered');
     })
     
}
handleKeys();

// export default function Form() {
//     const [answer, setAnswer] = useState('');
//     const [error, setError] = useState(null);
//     const [status, setStatus] = useState('');
  
//     if (status === 'success') {
//       return <h1>That's right!</h1>
//     }
  
//     async function handleSubmit(e:any){
//       e.preventDefault();
//       setStatus('submitting');
//       try {
//         await submitForm(answer);
//         setStatus('success');
//       } catch (err:any) {
//         setStatus('typing');
//         setError(err);
//       }
//     }
  
//     function handleTextareaChange(e:any) {
//       setAnswer(e.target.value);
//     }
  
//     return (
//       <>
//         <h2>City quiz</h2>
//         <p>
//           In which city is there a billboard that turns air into drinkable water?
//         </p>
//         <form onSubmit={handleSubmit}>
//           <textarea
//             value={answer}
//             onChange={handleTextareaChange}
//             disabled={status === 'submitting'}
//           />
//           <br />
//           <button disabled={
//             answer.length === 0 ||
//             status === 'submitting'
//           }>
//             Submit
//           </button>
//           {error !== null &&
//             <p className="Error">
//               {error}
//             </p>
//           }
//         </form>
//       </>
//     );
//   }
  
//   function submitForm(answer:any) {
//     // Pretend it's hitting the network.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let shouldError = answer.toLowerCase() !== 'lima'
//         if (shouldError) {
//           reject(new Error('Good guess but a wrong answer. Try again!'));
//         } else {
//           resolve("'That's right!!");
//         }
//       }, 1500);
//     });
//   }