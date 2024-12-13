import { useRouter } from 'next/router';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';

const Book = (props)=>{ 
    const router = useRouter();
    const { user } = useAuth();

    const handleDetailButton =()=>{
      if (!user) {
        router.push(`/login?redirectTo=/books/${props.id}`);
      } else {
        router.push(`/books/${props.id}`);
      }
    }
    const handleAuthorDetailButton =()=>{
      if (!user) {
        router.push(`/login?redirectTo=/books/${props.id}/${props.authorID}`);
      } else {
        router.push(`/books/${props.id}/${props.authorID}`)
      }
    }
    return (


      <Card 
  key={props.id} 
  sx={{ 
    padding: '10px', 
    border: '1px solid #ccc', 
    borderRadius: '5px', 
    maxWidth: '300px', 
    minWidth: '250px', 
    margin: '10px', 
    textAlign: 'left', 
    backgroundColor: '#fff'
  }}
>
  <CardContent>
    {props.title && (
      <Typography 
        variant="h6" 
        sx={{ 
          fontSize: '1.2em', 
          marginBottom: '10px', 
          color: '#000',
          fontWeight: 'bold' 
        }}
      >
        {props.title}
      </Typography>
    )}

    {props.rating && (
      <Typography 
        variant="body2" 
        sx={{ 
          marginBottom: '5px', 
          color: '#555' 
        }}
      >
        <strong>Rating: </strong>{props.rating}
      </Typography>
    )}

    {props.price && (
      <Typography 
        variant="body2" 
        sx={{ 
          marginBottom: '5px', 
          color: '#555' 
        }}
      >
        <strong>Price: </strong>${props.price}
      </Typography>
    )}


{props.genre && (
        <Typography
          variant="body2"
          sx={{ 
            marginBottom: '5px', 
            color: '#555' 
          }}
        >
          <strong>Genres: </strong>{props.genre}
        </Typography>
      )}

    {props.description && (
      <Typography 
        variant="body2" 
        sx={{ 
          marginBottom: '10px', 
          color: '#555' 
        }}
      >
        {props.description}
      </Typography>
    )}

    {props.button && (
      <Button 
        variant="outlined" 
        sx={{ 
          border: '2px solid #007bff', 
          color: '#007bff', 
          padding: '6px 12px', 
          fontSize: '0.9em', 
          borderRadius: '20px', 
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#007bff', 
            color: '#fff', 
            borderColor: '#0056b3' 
          }
        }}
        onClick={handleDetailButton}
      >
        {props.button}
      </Button>
    )}





{props.AuthorButton && (
        <div className="buttonContainer" style={{ marginTop: '15px' }}>
          <Button
            variant="outlined"
            sx={{ 
              border: '2px solid #007bff', 
              color: '#007bff', 
              padding: '6px 12px', 
              fontSize: '0.9em', 
              borderRadius: '20px', 
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#007bff', 
                color: '#fff', 
                borderColor: '#0056b3' 
              }
            }}
            onClick={handleAuthorDetailButton}
          >
            {props.AuthorButton}
          </Button>
        </div>
      )}


  </CardContent>
</Card>


    
    );
}

export default Book;