/* eslint-disable @next/next/no-img-element */
import React from "react";

import Grid from "@mui/material/Grid";
import {
  Card,
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
import { CodeBlock, DynamicImageList } from "../components";

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
            As iOS is used less in China and we have Kotlin Multiplatform, I
            decided to build it natively for Android. I had experience with
            Android on Xamarin, but it was written in C#. To improve my
            understanding of the Android platform, I followed some tutorials
            from
            <a href="http://developer.android.com/reference">Philipp Lackner</a>
            . After going through the Android Fundemental playlist I discovered
            Jetpack Compose.
          </p>

          <p>
            Jetpack compose does not use XML/XAML as in Xamarin and Android
            Native. That means that no adapters are required, and it
            doesn&apos;t use view bindings and instead relies on a state defined
            in the view model. That created a better connection between the data
            and the view and reduced the number of files required.
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            App
          </Typography>

          <p>
            After logging into the app, the admin will be navigated to the admin
            panel. The admin panel allows the admin to create and edit daily
            classes, users&apos; monthly plans, users&apos; payments, and the
            users themselves. Admin can also edit its information and send
            messages to users.
          </p>

          <p>Here is a video recording showing the admin panel</p>

          <YoutubeEmbed embedId="Zm_Pas6ss3s" />

          <p>
            Ordinary users get logged into the user panel. They will need to
            fill in some information about themselves and take a profile photo.
            Then they can log in with their new password and navigate to the
            users&apos; panel. Here they can see which classes they have, chat
            with the admin, and change their info.
          </p>

          <p>
            The chat screen uses WebSockets to get new messages in real-time.
            Each time a user opens the chat screen, it will create a secure chat
            session with the admin and whenever they leave it will disconnect
            the chat session.
          </p>

          <DynamicImageList cols={2}>
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
          </DynamicImageList>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Spring Backend
          </Typography>

          <p>
            The backend was created in Spring Boot. I have used PHP in the past
            but found it difficult to debug and organize the code. Phillip
            Lackner reccomeded Ktor, so I checked it out. It worked well, but as
            it was less popular, it was difficult to search for solutions to
            problems. I eventually decided to go for Spring Boot, which is well
            documented and feels familiar due to the similarity with C#.
          </p>

          <p>
            The Java backend is using feature structure. Inside each feature
            there is a controller that takes incoming API requests, such as
            getting chat messages for a user. The controller transfer the
            request to the service layer that request data from the repository.
            Then the repository layer makes a PostgreSQL request to the database
            and send the data back to the service layer, which will transform
            the data into the correct format and send it back to the controller.
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

          <DynamicImageList cols={2}>
            <ImageListItem key={workImages.myplaygroup_structure.src}>
              <img src={workImages.myplaygroup_structure.src} alt="image" />
              <ImageListItemBar position="below" title="Backend Structure" />
            </ImageListItem>

            <ImageListItem key={workImages.myplaygroup_security.src}>
              <img src={workImages.myplaygroup_security.src} alt="image" />
              <ImageListItemBar position="below" title="Security" />
            </ImageListItem>
          </DynamicImageList>

          <p>
            The backend also provides chat sockets through the
            MessageSocketHandler that can connect and disconnect new members and
            send messages. Also, when a user receives and reads a message, then
            it will send the message back to show the user that the message has
            been read.
          </p>

          <DynamicImageList cols={1}>
            <ImageListItem key={workImages.myplaygroup_sockets.src}>
              <img src={workImages.myplaygroup_sockets.src} alt="image" />
              <ImageListItemBar
                position="below"
                title="Message Socket Handler"
              />
            </ImageListItem>
          </DynamicImageList>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Setting up the domain
          </Typography>

          <p>
            The spring boot server is hosted on a self managed Ubuntu VPS
            server. I chose Ubuntu as I wanted a server option that is well
            documented.
          </p>

          <p>
            The first step to set up the spring boot server was to set up the
            domain.
          </p>

          <p>
            The firewall configurations are set up to allow the permitted
            requests and deny others.
          </p>

          <CodeBlock>
            <p>$ sudo ufw allow &apos;Apache Full&apos;</p>
            <p>$ sudo ufw allow OpenSSH</p>
            <p>$ sudo ufw allow 8080</p>
            <p>$ sudo ufw status</p>
          </CodeBlock>

          <p>
            We created a new directory for the website and set up the required
            permissions.
          </p>

          <CodeBlock>
            <p>$ mkdir /var/www/vegardaaberge</p>
            <p>$ chown -R $USER:$USER /var/www/vegardaaberge</p>
            <p>$ chmod -R 755 /var/www/vegardaaberge</p>
          </CodeBlock>

          <p>Then we need to setup a virtual host for the domain.</p>

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

          <p>The new virtual host was enabled with a2ensite.</p>

          <CodeBlock>
            <p>a2ensite vegardaaberge.conf</p>
            <p>a2dissite 000-default.conf</p>
            <p>apache2ctl configtest</p>
          </CodeBlock>

          <p>To apply the changes we needed to restart apache2.</p>

          <CodeBlock>
            <p>sudo systemctl restart apache2</p>
          </CodeBlock>

          <p>
            The guide that I used to set up the apache webserver can be found
            here.
          </p>

          <p>
            <a
              href="https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04#step-5-%E2%80%94-setting-up-virtual-hosts-recommended"
              target="_blank"
              rel="noreferrer"
            >
              How To Install the Apache Web Server on Ubuntu 18.04
            </a>
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Setting up SSL
          </Typography>

          <p>
            Certbot was used to set up SSL as it will allow it to handle SSL
            automatically. To run Cerbot we needed to install certbot and
            python3-certbot-apache.
          </p>

          <CodeBlock>
            <p>$ sudo apt install certbot python3-certbot-apache</p>
          </CodeBlock>

          <p>The Certbot plugin was run with the following command.</p>

          <CodeBlock>
            <p>$ sudo certbot --apache</p>
          </CodeBlock>

          <p>
            Certbot set up SSL for ordinary HTTPS requests, but not for the
            Spring Boot application. To set up SSL for spring boot, we navigated
            to the directory where the PEM file is located, and then we need to
            generate a PKCS12 that will be used for spring SSL. The password
            should match the password provided in the Spring server.yml file.
          </p>

          <CodeBlock>
            <p>$ cd /etc/letsencrypt/live/vegardaaberge.no</p>
            <p>
              $ openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out
              keystore.p12 -name tomcat -CAfile chain.pem -caname root
            </p>
          </CodeBlock>

          <p>
            Certbot does not automatically update the PKCS12, so it needs to be
            regenerated every three months. If it is not regenerated, the app
            will not be able to communicate with the server.
          </p>

          <p>The guide that I used to set up SSL can be found here.</p>
          <p>
            <a
              href="https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04"
              target="_blank"
              rel="noreferrer"
            >
              How To Secure Apache with Let's Encrypt on Ubuntu 18.04
            </a>
          </p>
          <p>
            <a
              href="https://dzone.com/articles/spring-boot-secured-by-lets-encrypt"
              target="_blank"
              rel="noreferrer"
            >
              Spring Boot Secured By Let&apos;s Encrypt
            </a>
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Installing Java
          </Typography>

          <p>
            The Spring backend requires Java to be installed. To install Java,
            we will need to install the default JRE and JDK.
          </p>

          <CodeBlock>
            <p>$ sudo apt install default-jre</p>
            <p>$ sudo apt install default-jdk</p>
          </CodeBlock>

          <p>We can check if is correctly installed by running</p>

          <CodeBlock>
            <p>$ java =version</p>
            <p>$ javac -version</p>
          </CodeBlock>

          <p>
            After Java is installed then we need to set up the JAVA_HOME
            variable. We can use the readlink to find the location and then add
            it as an environment variable
          </p>

          <CodeBlock>
            <p>$ readlink -f /usr/bin/java</p>
            <p>$ sudo nano /etc/environment</p>
          </CodeBlock>

          <CodeBlock>
            <p>JAVA_HOME=&quot;/usr/lib/jvm/java-11-openjdk-amd64/&quot;</p>
          </CodeBlock>

          <p>To apply the changes we need to run</p>

          <CodeBlock>
            <p>$ source /etc/environment</p>
          </CodeBlock>

          <p>The guide that I used to set up Java can be found here.</p>
          <p>
            <a
              href="https://www.tecmint.com/install-java-with-apt-on-ubuntu/"
              target="_blank"
              rel="noreferrer"
            >
              How To Install Java with Apt on Ubuntu 20.04
            </a>
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Installing postgreSQL
          </Typography>

          <p>
            The Spring Boot backend uses PostgreSQL to communicate with the
            database. To install and run PostgreSQL, we need to run the
            following command.
          </p>

          <CodeBlock>
            <p>$ apt install postgresql postgresql-contrib</p>
            <p>$ systemctl start postgresql.service</p>
          </CodeBlock>

          <p>
            After installing PostgreSQL, we can set up the database environment
            for the spring application. To log in, we can run the following
            command.
          </p>

          <CodeBlock>
            <p>$ sudo -u postgres psql</p>
          </CodeBlock>

          <p>
            After logging in, then we created a playgroup database and a
            superuser that will be used by the Spring Boot application to modify
            the data. The password chosen need to match the password in the
            server.yml, and the user need to get the required permissions to
            modify the database.
          </p>

          <CodeBlock>
            <p>postgres=# create database playgroup;</p>
            <p>postgres=# createuser --interactive</p>
            <p>ALTER ROLE superuser WITH PASSWORD ...</p>
            <p>grant all privileges on database playgroup to superuser</p>
          </CodeBlock>

          <p>The guide that I used to set up PostgreSQL can be found here.</p>
          <p>
            <a
              href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04"
              target="_blank"
              rel="noreferrer"
            >
              How To Install and Use PostgreSQL on Ubuntu 20.04
            </a>
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Playgroup Service
          </Typography>

          <p>
            The last step is to set up the playgroup service. The service needs
            to be able to build the project, so we need to install Maven and
            Git.
          </p>

          <CodeBlock>
            <p>$ sudo apt install maven</p>
            <p>$ sudo apt install git</p>
          </CodeBlock>

          <p>
            Then we created a directory for the spring boot files and cloned it
            into the directory.
          </p>

          <CodeBlock>
            <p>$ mkdir /var/www/api/MyPlaygroup-Server</p>
            <p>
              $ git clone
              https://github.com/VegardAaberge/MyPlaygroup-Server.git
            </p>
          </CodeBlock>

          <p>
            Running the service without manually testing will lead to an error
            loop as it keeps restarting the application. To make sure it is
            working, we can run the application from the command line.
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
            To set up the service, we will need to create a new service file.
          </p>

          <CodeBlock>
            <p>$ nano /etc/systemd/system/playgroup.service</p>
          </CodeBlock>
          <CodeBlock>
            [Unit]
            <br />
            Description=Playgroup Service
            <br />
            After=network.target
            <br />
            StartLimitIntervalSec=10
            <br />
            StartLimitBurst=5
            <br />
            <br />
            [Service]
            <br />
            Type=simple
            <br />
            Restart=always
            <br />
            RestartSec=1
            <br />
            User=root
            <br />
            EnvironmentFile=/etc/environment
            <br />
            ExecStart=java -jar
            /var/www/api/MyPlaygroup-Server/target/MyPlaygroup-Server-0
            <br />
            <br />
            [Install]
            <br />
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
