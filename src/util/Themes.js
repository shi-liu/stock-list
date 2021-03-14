const styles = {
    palette: {
        primary: {
          light: '#33c9dc',
          main: '#00bcd4',
          dark: '#008394',
          contrastText: '#fff'
        },
        secondary: {
            main: "#FF4E00"
        },

    },
    typography: {
        fontFamily: `"Roboto"`
    },
    homeComp: {
        root: {

            height: "70px"
        }
    },
    mediaComp: {
        root: {
            maxWidth: "300px",
            margin: "25px"
        },
        contentRoot: {
            height: "200px"
        },
        media: {
            height: "17em",
            margin: "15px",
        },
        basicFont: {
            fontFamily: "Roboto",
        },
        mediaTitle: {
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "25px"
        }
    },
}

export default styles;