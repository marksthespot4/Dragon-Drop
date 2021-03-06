import axios from "axios";

/* Mark's comments
The routes for these are now in /server/routes/pageRoutes.js.
The routing call has been changed to /routes/pages/...
 */
export function uploadPage(user, pagename, pagedata, pub, pagepreview) {
    const newPage = {
        user: user.toLowerCase(),
        pagename: pagename,
        pagedata: pagedata,
        pub: pub,
        pagepreview: pagepreview,
    };

    return axios
        .post("http://localhost:5000/routes/pages/add", newPage)
        .then((res) => res.data);
}

export function updatePage(user, pagename, pub, pagedata, pagepreview, id) {
    const updatedPage = {
        user: user,
        pagename: pagename,
        pub: pub,
        pagedata: pagedata,
        pagepreview: pagepreview,
    };

    axios
        .post("http://localhost:5000/routes/pages/update/" + id, updatedPage)
        // .then((res) => console.log(res.data));
}

export function getPage(id) {
    return axios.get("http://localhost:5000/routes/pages/get/" + id)
            .then(res => res.data)
            .catch(function (error) {
                console.log(error);
            });
}


// export function getPagesByUser(user) {
//     return axios
//         .get("http://localhost:5000/record/pages/userSearch")
//         .then(res => res.data)
//         .catch(function (error) {
//             console.log(error);
//         });
// }

export function deletePage(id) {
    axios.delete("http://localhost:5000/routes/pages/delete/" + id).then((response) => {
        console.log(response.data);
    });
}

export function getPages() {
    return axios
        .get("http://localhost:5000/routes/pages/all")
        .then(response => response.data)
        .catch(function (error) {
            console.log(error);
        });
}