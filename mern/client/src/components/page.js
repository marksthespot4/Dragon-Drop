import axios from "axios";

export function uploadPage(user, pagename, isPublic, pagedata, pagepreview) {
    const newPage = {
        user: user,
        pagename: pagename,
        public: isPublic,
        pagedata: pagedata,
        pub: true,
        pagepreview: pagepreview,
    };

    axios
        .post("http://localhost:5000/record/pages/add", newPage)
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
        .post("http://localhost:5000/update/pages/" + id, updatedPage)
        .then((res) => console.log(res.data));
}

export function getPage(id) {
    return axios.get("http://localhost:5000/record/pages/" + id)
            .then(res => res.data)
            .catch(function (error) {
                console.log(error);
            });
}

export function deletePage(id) {
    axios.delete("http://localhost:5000/delete/pages/" + id).then((response) => {
        console.log(response.data);
    });
}