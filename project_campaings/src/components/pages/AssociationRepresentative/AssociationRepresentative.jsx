import React from "react";
import { getAssociationRepresentativeDataById } from "../../servers/servers";
export const socialActivist = (user) => {
  const { userId } = useParams();

  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const initUserData = async () => {
    try {
      const userObj = await getAssociationRepresentativeDataById(user.userId);
      setProduct(user);
      setIsLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoaded(true);
    }
  };
  useEffect(() => {
    initUserData();
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{userObj.userName}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{userObj.email}</li>-{" "}
          <li class="list-group-item">{userObj.cellphoneNumber}</li>
          <li class="list-group-item">{userObj.companyName}</li>
        </ul>
      </div>
    );
  }
};
