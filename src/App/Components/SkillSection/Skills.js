
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useTypewriter,Cursor } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import "./Skills.css"



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Progress = ({done}) => {
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

export default function ResponsiveGrid() {

  React.useEffect(() => {
    AOS.init();
      AOS.refresh();
  }, []);
  
    const skills = [{
        name: 'HTML',
        percentage: '80',
        dir: 'left'
    }, {
        name: 'CSS',
        percentage: '70',
        dir:"right"
    }, {
        name: 'JavaScript',
        percentage: '75',
        dir: 'left'
    }, {
        name: 'React',
        percentage: '85',
        dir: 'right'
    },
    {
        name: 'NodeJS',
        percentage: '70',
        dir: 'left'
    },
    {
        name: 'ExpressJS',
        percentage: '78',
        dir: 'right'
    },
    {
        name: 'MongoDB',
        percentage: '80',
        dir: 'left'
    },
    {
        name: 'MySQL',
        percentage: '82',
        dir: 'right'
    },
    {
        name: 'Bootstrap',
        percentage: '90',
        dir: 'left'
    },
    {
      name:"React Native",
      percentage:"80",
      dir:"right"
    },
    
    
    ];

    const stacks = [{
        name: 'fa-brands fa-html5', 
        color: '#e34f26'  
    },
    {
        name: 'fa-brands fa-css3-alt',
        color: '#264de4'
      },
      {
        name: 'fa-brands fa-js-square',
        color: '#f0db4f'
      },
      {
        name: 'fa-brands fa-react',
        color: '#61dbfb'
      },
      {
        name: 'fa-brands fa-node-js',
        color: 'green'
      }
    ];
    

    const {text} = useTypewriter({
        words: ['Skills','Gifts'],
        loop: 0,
        Cursor,
        CursorStyle:'_',
        typeSpeed:120,
        deleteSpeed:100,
        delaySpeed:1000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })

  return (
    <Box sx={{ flexGrow: 1,margin:2 }}>
        
        <h1 
             data-aos="slide-right"
             data-aos-duration="800"
        style={{ paddingTop: '1rem',paddingBottom:'2rem', margin: 'auto 0', fontWeight: 'normal',textAlign:"center" }}>
            My {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              {text}
            </span>
          </h1>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}

      >
        {skills.map(data => (
          <Grid item xs={2} sm={4} md={4} key={data.percentage}>
            <Item
                  data-aos="fade-up-left"

                  data-aos-offset="200"
                  data-aos-delay="50"
            >
                <h3 style={{textAlign:"left",marginLeft:'5px'}}>{data.name}</h3>
                <Progress done={data.percentage}/>
            </Item>
          </Grid>
        ))}
      </Grid>

      <h1 style={{ paddingTop: '1rem',paddingBottom:'2.5rem', margin: 'auto 0', fontWeight: 'normal',textAlign:"center",marginTop:"50px" }}
      
      data-aos="slide-right"
      data-aos-duration="800"
      >
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              Stacks
            </span>
     </h1>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
      >
        {stacks.map(data => (
          <Grid item xs={2} sm={4} md={4} 
          
          >
            <Item
              style={{
                border:"none",
                boxShadow:"none",
              }}
            >
          
            <FontAwesomeIcon icon={data.name} size="8x" 
            bounce
            
            style={{color:data.color}}/>
            
            </Item>
          </Grid>
        ))}
      </Grid>


    </Box>
  );
}




