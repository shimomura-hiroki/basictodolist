import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { selectUser, login, logout } from '../slices/userSlice';

