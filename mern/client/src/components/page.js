import axios from "axios";

export function uploadPage(user, pagename, pagedata, pub, pagepreview) {
    const newPage = {
        user: user,
        pagename: pagename,
        pagedata: pagedata,
        pub: pub,
        pagepreview: pagepreview,
    };

    axios
        .post("http://localhost:5000/routes/pages/add", newPage)
        .then((res) => console.log(res.data));
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
        .post("http://localhost:5000/routes/pages/" + id, updatedPage)
        .then((res) => console.log(res.data));
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