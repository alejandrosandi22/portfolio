import React, { useEffect, useMemo, useReducer, useRef } from 'react';
import styles from '../../styles/Technologies.module.scss';

interface StateType {
  front: string,
  left: string,
  right: string,
  back: string,
}

interface ActionType {
  type: string,
  payload: StateType,
}

const initialState: StateType = {
  front: 'devicon-html5-plain colored',
  left: 'devicon-css3-plain colored',
  right: 'devicon-sass-original colored',
  back: 'devicon-javascript-plain colored',
}

function reducer(state: any, action: any) {
  const { type, payload } = action;

  if (type === 'CHANGE_ICON_ACTION') return {
      ...state,
      ...payload
    }
}


function Technologies() {

  const technologies = useMemo( () => [
    'devicon-html5-plain colored',
    'devicon-css3-plain colored',
    'devicon-sass-original colored',
    'devicon-javascript-plain colored',
    'devicon-typescript-plain colored',
    'devicon-react-original colored',
    'devicon-angularjs-plain colored',
    'devicon-vuejs-plain colored',
    `devicon-nextjs-original ${styles.nextjs}`,
    'devicon-nodejs-plain colored',
    'devicon-git-plain colored',
    'devicon-graphql-plain colored',
    'devicon-mongodb-plain colored',
    'devicon-firebase-plain colored',
  ], []);

  const index = useRef<number>(4);
  const preload = useRef<boolean>(true);

  const [ state, dispatch ] = useReducer(reducer, initialState);

  const timer = () => {
    if (!preload.current) return;
    preload.current = false;
      setInterval(() => {
        dispatch({
          type: 'CHANGE_ICON_ACTION' ,
          payload: {right: technologies[index.current]}
        })
        index.current++;
        if (index.current >= technologies.length) index.current = 0;
      }, 10000)

      setTimeout(() => {
        setInterval(() => {
          dispatch({
            type: 'CHANGE_ICON_ACTION' ,
            payload: {back: technologies[index.current]}
          })
          index.current++;
          if (index.current >= technologies.length) index.current = 0;
        }, 10000);
      }, 7500)
  
      setTimeout(() => {
        setInterval(() => {
          dispatch({
            type: 'CHANGE_ICON_ACTION' ,
            payload: {left: technologies[index.current]}
          })
          index.current++;
          if (index.current >= technologies.length) index.current = 0;
        }, 10000)
      }, 5000)
  
      setTimeout(() => {
        setInterval(() => {
          dispatch({
            type: 'CHANGE_ICON_ACTION' ,
            payload: {front: technologies[index.current]}
          })
          index.current++;
          if (index.current >= technologies.length) index.current = 0;
        }, 10000)
      }, 2500)
  }


  useEffect(() => {
    if (!preload.current) return;
    preload.current = false;
      setInterval(() => {
        dispatch({
          type: 'CHANGE_ICON_ACTION' ,
          payload: {right: technologies[index.current]}
        })
        index.current++;
        if (index.current >= technologies.length) index.current = 0;
      }, 10000)

      setTimeout(() => {
        setInterval(() => {
          dispatch({
            type: 'CHANGE_ICON_ACTION' ,
            payload: {back: technologies[index.current]}
          })
          index.current++;
          if (index.current >= technologies.length) index.current = 0;
        }, 10000);
      }, 7500)
  
      setTimeout(() => {
        setInterval(() => {
          dispatch({
            type: 'CHANGE_ICON_ACTION' ,
            payload: {left: technologies[index.current]}
          })
          index.current++;
          if (index.current >= technologies.length) index.current = 0;
        }, 10000)
      }, 5000)
  
      setTimeout(() => {
        setInterval(() => {
          dispatch({
            type: 'CHANGE_ICON_ACTION' ,
            payload: {front: technologies[index.current]}
          })
          index.current++;
          if (index.current >= technologies.length) index.current = 0;
        }, 10000)
      }, 2500)
  }, [technologies]);

  return(
    <div className={styles.cubeWrapper}>
      <div className={styles.cube}>
        <span className={styles.face}>
          <i className={state.front}></i>
        </span>
        <span className={styles.face}></span>
        <span className={styles.face}>
          <i className={state.back}></i>
        </span>
        <span className={styles.face}></span>
        <span className={styles.face}>
          <i className={state.right}></i>
        </span>
        <span className={styles.face}>
          <i className={state.left}></i>
        </span>
      </div>
    </div>
  );
}

export default React.memo(Technologies);