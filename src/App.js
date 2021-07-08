import NavBar from '../src/components/NavBar'
import Search from '../src/components/Search'
import classes from '../src/assets/css/main.module.css'
const App = () => {
  return (
    <div className={classes.appWrapper}>
      <div className={classes.navSearchContainer}>
        <NavBar />
        <Search />
      </div>

      <div className={classes.wrapper}>
        <div className={classes.innerContainer}>
          <div className={classes.thumbnail}>
            <img
              src='https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
          </div>
          <div className={classes.title}>
            <p>est vel et laboriosam quo aspernatur distinctio molestiae</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
