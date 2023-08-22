import 'package:flutter/material.dart';
import 'package:happi_oven/pages/home_page/home_page.dart';
import 'package:happi_oven/pages/login_page/login_page.dart';
import 'package:happi_oven/pages/splash_page/splash_page.dart';
import 'package:happi_oven/theme/color_schemes.g.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      routes: {
        '/home': (context) => const HomePage(),
        '/login': (context) => const LoginPage(),
        '/splash': (context) => const SplashPage()
      },
      initialRoute: '/splash',
      theme: ThemeData(useMaterial3: true, colorScheme: lightColorScheme),
      darkTheme: ThemeData(useMaterial3: true, colorScheme: darkColorScheme),
    );
  }
}
