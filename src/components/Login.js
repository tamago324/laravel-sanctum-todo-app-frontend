import {
  CssBaseline,
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

import axios from '@/lib/axios';
import user from '@/Models/user';
import { useNavigate } from 'react-router-dom';

function Login() {
  // 遷移用のオブジェクトを生成
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // FormDataを使うと、フォームの内容を簡単にまとめられる
    const formData = new FormData(event.currentTarget);

    const loginCredentials = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    // ログイン成功時に実行する関数
    const authenticatedCallback = () => {
      // 履歴を書き換えて、保護されたルートにリダイレクトする？

      // v6 からは useNavigate() を使うらしい？
      // また、replace に true をセットすることで、 /login に戻らないようにしている
      navigate('/dashboard', { replace: true });
    };

    axios.get('/sanctum/csrf-cookie').then((_) => {
      axios.post('/auth/login', loginCredentials).then((response) => {
        // もし、ログインが成功したら、localStorage に保存してコールバック関数を呼び出してもらう
        user.authenticated(response.data, authenticatedCallback);
      });
    });
  };

  return (
    <Container>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component={'h1'} variant={'h5'}>
          Login
        </Typography>
        <Box component={'form'} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          ></TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          ></TextField>
          <Button
            fullWidth
            variant={'outlined'}
            type={'submit'}
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
