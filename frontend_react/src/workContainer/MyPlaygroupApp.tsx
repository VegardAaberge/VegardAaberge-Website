/* eslint-disable @next/next/no-img-element */
import React from "react";

import Grid from "@mui/material/Grid";
import {
  Card,
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

import { WorkItem } from "../container/Work/WorkItem";
import WorkSummary from "./Components/WorkSummary";
import WorkHeader from "./Components/WorkHeader";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed";

import { workImages } from "../constants";

import styles from "../styles/App.module.scss";
import { CodeBlock } from "../components";

interface Props {
  work: WorkItem;
}

const PortfolioWebsite: React.FC<Props> = ({ work }) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card variant="outlined">
          <WorkSummary work={work} />
        </Card>
      </Grid>
      <Grid item md={8}>
        <Card variant="outlined" sx={{ p: 3 }} className={styles.work_item}>
          <WorkHeader title={work.title} />
          <p>
            MyPlaygroup App is an app created for the business MyPlaygroup. The
            purpose of the app is mainly to manage customers classes, payments
            and plans. It also provided the users some information about their
            classes and how much they have paid.
          </p>

          <p>
            As iOS is not big in China and we have Kotlin Multiplatform, then I
            decided to built it natively for Android. I had experience with
            Android on Xamarin, but it was written in C#. To understand Android
            platform better I followed some tutorials from philipp lackner.
            After going through the Android Fundemandels playlist I discovered
            Jetpack Compose.
          </p>

          <p>
            Jetpack compose do not use xml/xaml as in Xamarin and Android
            Native. This means that no adapters is required and it doesn't use
            view bindings and instead rely on a state defined in the viewmodel.
            This created a better connection with the data and the view and
            reduced the amount of files required to show a view.
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            App
          </Typography>

          <p>
            After logging into the app, then admin will be navigated to the
            admin panel and users will be navigated into the user panel.
          </p>

          <p>
            After logging into the app, then admin will be navigated to the
            admin panel. The admin panel allows the admin to create and edit
            daily classes, user's monthly plans, user's payments and the users
            themselves. Admin can also edit its own information and send
            messages to users.
          </p>

          <p>Here is a video recording showing the admin panel</p>

          <YoutubeEmbed embedId="Zm_Pas6ss3s" />

          <p>
            Non-admin users get logged into the user panel. They will first need
            to fill in some information about themselves and take a profile
            photo. Then they can login with their new password and get logged
            into the users panel. Here they can see which classes they have,
            chat with admin and change their info
          </p>

          <p>
            The chat screen uses websockets to get new messages in real time.
            Each time a user open the chat screen, it will create a secure chat
            session with admin.
          </p>

          <ImageList cols={2}>
            <ImageListItem key={workImages.myplaygroup_camera.src}>
              <img src={workImages.myplaygroup_camera.src} alt="image" />
              <ImageListItemBar position="below" title="Profile Photo" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_profile.src}>
              <img src={workImages.myplaygroup_profile.src} alt="image" />
              <ImageListItemBar position="below" title="Create Profile" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_classes.src}>
              <img src={workImages.myplaygroup_classes.src} alt="image" />
              <ImageListItemBar position="below" title="User's classes" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_settings.src}>
              <img src={workImages.myplaygroup_settings.src} alt="image" />
              <ImageListItemBar position="below" title="User's settings" />
            </ImageListItem>
          </ImageList>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Spring Backend
          </Typography>

          <p>
            The backend was created in Spring Boot. I had used PHP in the past,
            but found it difficult to effectively debug and organize the code.
            The earlier tutorial mentioned ktor, so I checked it out. It worked
            well, but due to low usage it was difficult to search for solutions
            to problems. I eventially decided to go for Spring Boot, which would
            allow me to code in Java and was well documented.
          </p>

          <p>
            The Java backend was structures by features and inside each feature
            there is a controller that takes incoming API requests such as
            getting chat messages for an user. Then it transfered to the service
            layer which will request data from the repository. The repository
            will make a postgreSQL request to the database and send the data
            back to the service layer, which will transform the data into the
            right format and send it back to the controller
          </p>

          <p>
            Each request is done over HTTPS and is secured with JWT token. The
            user is provided a refresh token on login and can use that token to
            get an access token. The access token is only valid for a short
            period, so the app automatically uses the refresh token to get a new
            access token when required. In the security picture below, the
            WebSecurityConfig provides info about which requests require
            authentication. CustomAuthenticationFilter and
            CustomAuthorizationFilter check if the token provided is valid and
            the AuthorizationService allows other classes in the app get access
            to security information such as which user made the request.
          </p>

          <ImageList cols={2}>
            <ImageListItem key={workImages.myplaygroup_structure.src}>
              <img src={workImages.myplaygroup_structure.src} alt="image" />
              <ImageListItemBar position="below" title="Backend Structure" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_security.src}>
              <img src={workImages.myplaygroup_security.src} alt="image" />
              <ImageListItemBar position="below" title="Security" />
            </ImageListItem>
          </ImageList>

          <p>
            The backend also provides chat sockets through the
            MessageSocketHandler which can connect and disconnect new members
            and send messages. Also, when a user receives and read a message,
            then it will send the message back to show the user that the message
            has been read.
          </p>

          <ImageList cols={1}>
            <ImageListItem key={workImages.myplaygroup_sockets.src}>
              <img src={workImages.myplaygroup_sockets.src} alt="image" />
              <ImageListItemBar
                position="below"
                title="Message Socket Handler"
              />
            </ImageListItem>
          </ImageList>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Setting up the domain
          </Typography>

          <p>
            The spring boot server was hosted on a self managed Ubuntu VPS
            server. Ubuntu was chosen as I wanted a server option that is well
            documented.
          </p>

          <p>
            The first step to setup the spring boot server was to setup the
            domain.
          </p>

          <p>I started with adjusting the firewall</p>

          <CodeBlock>
            <p>$ sudo ufw allow &apos;Apache Full&apos;</p>
            <p>$ sudo ufw allow OpenSSH</p>
            <p>$ sudo ufw allow 8080</p>
            <p>$ sudo ufw status</p>
          </CodeBlock>

          <p>
            We will now need to create a new folder for the website and set the
            required permissions
          </p>

          <CodeBlock>
            <p>$ mkdir /var/www/vegardaaberge</p>
            <p>$ chown -R $USER:$USER /var/www/vegardaaberge</p>
            <p>$ chmod -R 755 /var/www/vegardaaberge</p>
          </CodeBlock>

          <p>Then we need to setup a virtual host for the domain</p>

          <CodeBlock>
            <p>$ nano /etc/apache2/sites-available/vegardaaberge.conf</p>
          </CodeBlock>

          <CodeBlock>
            <p>{`<VirtualHost *:80>`}/</p>
            <p>&nbsp; &nbsp; ServerAdmin webmaster@localhost/</p>
            <p>&nbsp; &nbsp; ServerName vegardaaberge.no</p>
            <p>&nbsp; &nbsp; ServerAlias www.vegardaaberge.no/</p>
            <p>&nbsp; &nbsp; DocumentRoot /var/www/vegardaaberge</p>
            <p>&nbsp; &nbsp; {`ErrorLog $\{APACHE_LOG_DIR\}/error.log/`}</p>
            <p>
              &nbsp; &nbsp;{" "}
              {`CustomLog $\{APACHE_LOG_DIR\}/access.log combined/`}
            </p>
            <p>{`</VirtualHost>`}/</p>
          </CodeBlock>

          <p>
            After this is done then we can enable the virtualhost file with
            a2ensite
          </p>

          <CodeBlock>
            <p>a2ensite vegardaaberge.conf</p>
            <p>a2dissite 000-default.conf</p>
            <p>apache2ctl configtest</p>
          </CodeBlock>

          <p>And then restart apache2</p>

          <CodeBlock>
            <p>sudo systemctl restart apache2</p>
          </CodeBlock>

          <p>
            The guide that I used to setup the apache webswrver can be found
            here
            https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04#step-5-%E2%80%94-setting-up-virtual-hosts-recommended
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Setting up SSL
          </Typography>

          <p>
            It was decided to use Certbot to setup SSL as it will allow it to
            handle SSL automatically. First we need to install certbot and
            python3-certbot-apache
          </p>

          <CodeBlock>
            <p>$ sudo apt install certbot python3-certbot-apache</p>
          </CodeBlock>

          <p>To run the certbot plugin, the following command was run</p>

          <CodeBlock>
            <p>$ sudo certbot --apache</p>
          </CodeBlock>

          <p>
            To use SSL for spring boot, then we needed to navigate to the
            directory where the pem file is located
          </p>

          <CodeBlock>
            <p>$ cd /etc/letsencrypt/live/vegardaaberge.no</p>
          </CodeBlock>

          <p>
            Then we need to generate the PKCS12 file that will be used for
            spring SSL. The password should match the password provided in the
            Spring server.yml file.
          </p>

          <CodeBlock>
            <p>
              $ openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out
              keystore.p12 -name tomcat -CAfile chain.pem -caname root
            </p>
          </CodeBlock>

          <p>
            This needs to be done every 3 months or the app will not be able to
            communicate with the server.
          </p>

          <p>The following sources was used</p>
          <p>
            https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04
          </p>
          <p>https://dzone.com/articles/spring-boot-secured-by-lets-encrypt</p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Installing Java
          </Typography>

          <p>
            To run a Spring backend, then java need to be installed. To install
            Java, we will need to install the default JRE and JDK
          </p>

          <CodeBlock>
            <p>$ sudo apt install default-jre</p>
            <p>$ sudo apt install default-jdk</p>
          </CodeBlock>

          <p>Then we can check if is correctly installed by running</p>

          <CodeBlock>
            <p>$ java =version</p>
            <p>$ javac -version</p>
          </CodeBlock>

          <p>
            Then we need to set up the JAVA_HOME variable. We can use the
            readlink to find the location and then add it as an environment
            variable
          </p>

          <CodeBlock>
            <p>$ readlink -f /usr/bin/java</p>
            <p>$ sudo nano /etc/environment</p>
          </CodeBlock>

          <CodeBlock>
            <p>JAVA_HOME=&quot;/usr/lib/jvm/java-11-openjdk-amd64/&quot;</p>
          </CodeBlock>

          <p>Then we can apply the changes with</p>

          <CodeBlock>
            <p>$ source /etc/environment</p>
          </CodeBlock>

          <p>The following sources was used</p>
          <p>https://www.tecmint.com/install-java-with-apt-on-ubuntu/</p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Installing postgreSQL
          </Typography>

          <p>
            The Spring Boot backend requires postgreSQL to be installed. To
            install and run postgreSQL, we need to run the following command:
          </p>

          <CodeBlock>
            <p>$ apt install postgresql postgresql-contrib</p>
            <p>$ systemctl start postgresql.service</p>
          </CodeBlock>

          <p>
            After settting up postgreSQL, then we need to setup the database
            environment for the spring application. To login we can run the
            following command
          </p>

          <CodeBlock>
            <p>$ sudo -u postgres psql</p>
          </CodeBlock>

          <p>
            We will then create a database for the application and a user that
            has access to the database with the required permissions
          </p>

          <CodeBlock>
            <p>postgres=# create database playgroup;</p>
            <p>postgres=# createuser --interactive</p>
            <p>ALTER ROLE superuser WITH PASSWORD ...</p>
            <p>grant all privileges on database playgroup to superuser</p>
          </CodeBlock>

          <p>
            The password chosen need to match the password in the server.yml
            file
          </p>

          <p>The following sources was used</p>
          <p><a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04" target="_blank">How To Install and Use PostgreSQL on Ubuntu 20.04</a></p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Playgroup Service
          </Typography>

          <p>
            To setup the playgroup service, we will need to install Maven and
            Github
          </p>

          <CodeBlock>
            <p>$ sudo apt install maven</p>
            <p>$ sudo apt install git</p>
          </CodeBlock>

          <p>
            Then we need to create a directory for the spring boot files and
            clone it
          </p>

          <CodeBlock>
            <p>$ mkdir /var/www/api/MyPlaygroup-Server</p>
            <p>
              $ git clone
              https://github.com/VegardAaberge/MyPlaygroup-Server.git
            </p>
          </CodeBlock>

          <p>
            We first need to ensure that it is working before we make it in to a
            service, so we run the maven build and then run the java file from
            the server
          </p>

          <CodeBlock>
            <p>$ mvn clean install</p>
            <p>
              $ java -jar
              /var/www/api/MyPlaygroup-Server/target/MyPlaygroup-Server-0.0.1-SNAPSHOT.jar
              --spring.config.location=file:/var/www/api/MyPlaygroup-Server/src/main/resources/server.yml
            </p>
          </CodeBlock>

          <p>
            If everything is working, then we can set up the playgroup service.
            To setup a service, we will need to create a new service file
          </p>

          <CodeBlock>
            <p>$ nano /etc/systemd/system/playgroup.service</p>
          </CodeBlock>
          <CodeBlock>
            [Unit]<br />
            Description=Playgroup Service<br />
            After=network.target<br />
            StartLimitIntervalSec=10<br />
            StartLimitBurst=5<br />
            <br />
            [Service]<br />
            Type=simple<br />
            Restart=always<br />
            RestartSec=1<br />
            User=root<br />
            EnvironmentFile=/etc/environment<br />
            ExecStart=java -jar /var/www/api/MyPlaygroup-Server/target/MyPlaygroup-Server-0><br />
            <br />
            [Install]<br />
            WantedBy=multi-user.target
          </CodeBlock>

          <p>
            We can then create a bash script to pull changes from github and
            restart the server.
          </p>

          <CodeBlock>
            <p>$ nano buildPlaygroup.sh</p>
          </CodeBlock>

          <CodeBlock>
            <p>git -C /var/www/api/MyPlaygroup-Server pull</p>
            <p>mvn -f /var/www/api/MyPlaygroup-Server clean install</p>
            <p>systemctl stop playgroup</p>
            <p>systemctl start playgroup</p>
          </CodeBlock>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
