import axios from "axios";

export function uploadPage(user, pagename, isPublic, pagedata) {
    const newPage = {
        user: user,
        pagename: pagename,
        public: isPublic,
        pagedata: pagedata,
    };

    axios
        .post("http://localhost:5000/record/pages/add", newPage)
        .then((res) => console.log(res.data));
}

export function updatePage(user, pagename, isPublic, pagedata, id) {
    const updatedPage = {
        user: user,
        pagename: pagename,
        public: isPublic,
        pagedata: pagedata,
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