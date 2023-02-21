import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../PageTemplate/PageTemplate';


const ActivatedPage = () => {
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    (
      async () => {
        try {
          await axios.post('https://studapi.teachmeskills.by/auth/users/activation/', params)
        }
        catch (error: any) {
          navigate("/Blog")
        }
      }
    )()
  }, [])
  return (
    <PageTemplate linkName='Back to home' title='Activated Page'>
    </PageTemplate>
  )
}

export default ActivatedPage
