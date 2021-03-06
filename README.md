# Ming

A massive email sender tool.

## How to use

### Setting up env's

Create a file called **.env** in the project root.
And for the first configuration add this data.

```env
# if you'll use gmail
SMTP_HOST=smtp.gmail.com
# 587 for tls
SMTP_PORT=587

# your email and password
EMAIL_ADDRESS=
EMAIL_PASSWORD=
```

Your account need to be imtp and less secure apps configuration actives.

Also in **.env**, you can add the message default data by the way.

```env
SUBJECT=
MESSAGE=
# boolean, if u set this to true, write u html on message field
HTML=
```

### E-mails list

You need to create a file called **email_list.text** on the project root.

Using this model:

```txt
Person name 1
person1@email.com
Person name 2
person2@email.com
Person name 3
person3@email.com
...
...
```

### Running the code

You'll need NodeJS LTS and Typescript in your machine.

All commands are used on project folder.

#### Installing dependencies

```shell
npm install
```

#### Compiling the code

```shell
npm run compile
```

#### Running

```shell
npm run start
```

